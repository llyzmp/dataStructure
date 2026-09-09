#!/usr/bin/env node
/**
 * LeetCode 自动提交脚本
 *
 * 功能：把本地练习文件里的解题代码，自动提交到力扣（leetcode.cn / leetcode.com）
 *
 * 用法：
 *   node submit.js <题目slug> <代码文件路径> [语言]
 *   例：node submit.js remove-element ../practice/01-array/04-remove-element.js
 *   例：node submit.js remove-element ../practice/01-array/04-remove-element.js javascript
 *
 * 依赖：同目录下的 config.json（含你的力扣 Cookie，不会提交到 Git）
 */

const fs = require('fs');
const path = require('path');

// ---------- 读取配置 ----------
const CONFIG_PATH = path.join(__dirname, 'config.json');

function loadConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error('❌ 未找到 config.json');
    console.error('   请复制 config.example.json 为 config.json，并填入你的力扣 Cookie');
    process.exit(1);
  }
  try {
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  } catch (e) {
    console.error('❌ config.json 解析失败，请检查是否为合法 JSON');
    process.exit(1);
  }
}

const config = loadConfig();
const BASE = config.site === 'com' ? 'https://leetcode.com' : 'https://leetcode.cn';

const LANG = {
  js: 'javascript',
  javascript: 'javascript',
  ts: 'typescript',
  typescript: 'typescript',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function headers(referer) {
  return {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    'Cookie': config.cookie || '',
    'x-csrftoken': config.csrftoken || '',
    'Referer': referer || `${BASE}/`,
  };
}

// 从练习文件中提取「要提交的代码」：去掉顶部块注释 + 去掉测试代码部分
function extractCode(content) {
  let code = content;
  code = code.replace(/\/\*[\s\S]*?\*\//, '');                 // 去掉顶部 /** ... */
  const marker = code.indexOf('// ===== 测试代码');
  if (marker !== -1) code = code.slice(0, marker);             // 截断测试代码
  return code.trim();
}

// 通过 GraphQL 查询题目的 questionId
async function getQuestion(slug) {
  const query = 'query questionData($titleSlug: String!) { question(titleSlug: $titleSlug) { questionId questionFrontendId title titleSlug } }';
  const res = await fetch(`${BASE}/graphql/`, {
    method: 'POST',
    headers: headers(`${BASE}/problems/${slug}/`),
    body: JSON.stringify({ query, variables: { titleSlug: slug } }),
  });
  if (res.status !== 200) throw new Error(`查询题目失败 (HTTP ${res.status})，请检查 cookie 是否有效`);
  const data = await res.json();
  const q = data && data.data && data.data.question;
  if (!q) throw new Error(`未找到题目「${slug}」，请检查 slug 是否正确`);
  return q;
}

// 提交代码
async function submitCode(slug, code, lang) {
  const q = await getQuestion(slug);
  console.log(`📋 题目：${q.questionFrontendId}. ${q.title}（id=${q.questionId}）`);

  const res = await fetch(`${BASE}/problems/${slug}/submit/`, {
    method: 'POST',
    headers: headers(`${BASE}/problems/${slug}/`),
    body: JSON.stringify({
      lang: LANG[lang] || lang || 'javascript',
      question_id: q.questionId,
      typed_code: code,
    }),
  });

  if (res.status !== 200) {
    const text = await res.text();
    throw new Error(`提交失败 (HTTP ${res.status})：${text.slice(0, 300)}`);
  }

  const data = await res.json();
  if (!data || !data.submission_id) {
    throw new Error(`提交异常，返回：${JSON.stringify(data).slice(0, 300)}`);
  }
  return data.submission_id;
}

// 轮询检查结果
async function checkResult(submissionId) {
  for (let i = 0; i < 40; i++) {
    await sleep(2000);
    const res = await fetch(`${BASE}/submissions/detail/${submissionId}/check/`, {
      headers: headers(`${BASE}/submissions/detail/${submissionId}/`),
    });
    if (res.status !== 200) continue;
    const data = await res.json();
    if (data.state === 'SUCCESS') return data;
    // PENDING / STARTED 继续轮询
  }
  throw new Error('轮询超时（可能提交仍在排队，可稍后到力扣查看）');
}

// 输出结果
function printResult(r) {
  const status = r.status_msg || '未知状态';
  const runtime = r.status_runtime || '—';
  const memory = r.status_memory || '—';
  console.log('\n========== 提交结果 ==========');
  console.log(`状态：${status}`);
  console.log(`用时：${runtime}`);
  console.log(`内存：${memory}`);
  console.log('==============================');

  if (status === 'Accepted') {
    console.log('🎉 通过！力扣已留下 AC 记录');
  } else if (status === 'Compile Error') {
    console.log('❌ 编译错误：');
    console.log(r.compile_error || r.full_compile_error || '（无详细信息）');
  } else if (status === 'Runtime Error') {
    console.log('❌ 运行错误：');
    console.log(r.runtime_error || r.full_runtime_error || '（无详细信息）');
  } else if (status === 'Wrong Answer') {
    console.log('❌ 答案错误：');
    console.log(`   输入：${r.last_testcase || '（无）'}`);
    console.log(`   期望输出：${r.expected_output || '（无）'}`);
    console.log(`   实际输出：${r.code_output || '（无）'}`);
  } else {
    console.log(`⚠️ 状态：${status}`);
    console.log(JSON.stringify(r).slice(0, 400));
  }
}

// main
async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('用法：node submit.js <题目slug> <代码文件路径> [语言]');
    console.log('示例：node submit.js remove-element ../practice/01-array/04-remove-element.js');
    console.log('');
    console.log('常见 slug 映射：');
    console.log('  #26  remove-duplicates-from-sorted-array');
    console.log('  #27  remove-element');
    console.log('  #88  merge-sorted-array');
    console.log('  #283 move-zeroes');
    console.log('  #206 reverse-linked-list');
    console.log('  #21  merge-two-sorted-lists');
    console.log('  #141 linked-list-cycle');
    process.exit(1);
  }

  const [slug, filePath, lang] = args;

  if (!fs.existsSync(filePath)) {
    console.error(`❌ 代码文件不存在：${filePath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const code = extractCode(raw);
  if (!code) {
    console.error('❌ 未提取到代码，请确认文件里写了函数实现');
    process.exit(1);
  }

  console.log(`🚀 准备提交：${slug}`);
  console.log(`   语言：${LANG[lang] || lang || 'javascript'}`);
  console.log(`   代码长度：${code.length} 字符`);

  try {
    const submissionId = await submitCode(slug, code, lang);
    console.log(`✅ 已提交（submission_id=${submissionId}），检查结果中...`);
    const result = await checkResult(submissionId);
    printResult(result);
  } catch (e) {
    console.error(`❌ ${e.message}`);
    console.error('   提示：如遇「登录失效」，请重新登录力扣并更新 config.json 里的 Cookie');
    process.exit(1);
  }
}

main();
