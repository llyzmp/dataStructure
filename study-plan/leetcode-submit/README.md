# LeetCode 自动提交脚本

把本地练习文件里的代码，一条命令自动提交到力扣（leetcode.cn / leetcode.com），力扣上自动留下 AC 记录。

## ⚠️ 重要前提与风险

1. **需要你的力扣 Cookie**：力扣没有开放的第三方提交 API，本脚本是通过模拟登录（携带你的 Cookie）调用力扣内部接口实现的，原理与 leetcode-cli、VS Code LeetCode 插件一致。
2. **Cookie 是账号凭证，绝对保密**：`config.json` 已被 `.gitignore` 忽略，不会提交到 GitHub。切勿把 Cookie 发给任何人或写进任何会公开的地方。
3. **有风控风险**：力扣有 Cloudflare 防护，频繁自动化提交可能触发验证或限制。建议正常做题节奏使用，不要高频刷提交。

## 第一步：获取 Cookie

1. 浏览器登录 [leetcode.cn](https://leetcode.cn)（国际站用 leetcode.com）
2. 按 `F12` 打开开发者工具 → 切到 **Network（网络）** 标签
3. 刷新页面，点任意一个 `leetcode.cn` 的请求
4. 在 **Request Headers（请求头）** 里找到 `Cookie:` 那一行，复制整个值（很长一串，包含 `LEETCODE_SESSION=...` 等）
5. 再切到 **Application（应用）→ Cookies → https://leetcode.cn**，找到 `csrftoken`，复制它的值

> 关键项说明：`LEETCODE_SESSION` 是登录凭证（必须有）；`csrftoken` 是提交时校验用的。

## 第二步：配置

```bash
cd study-plan/leetcode-submit
cp config.example.json config.json
```

编辑 `config.json`，填入：

```json
{
  "site": "cn",
  "cookie": "LEETCODE_SESSION=xxx; csrftoken=yyy; _ga=...; ...（完整粘贴）",
  "csrftoken": "yyy"
}
```

- `site`：`"cn"` 力扣中国站，`"com"` 国际站
- `cookie`：完整 Cookie 字符串
- `csrftoken`：单独填一份 csrftoken 的值

## 第三步：使用

```bash
cd study-plan/leetcode-submit
node submit.js <题目slug> <代码文件路径>
```

示例：

```bash
node submit.js remove-element ../practice/01-array/04-remove-element.js
```

脚本会自动：
1. 查询题目 ID
2. 从练习文件里提取「函数实现」（自动去掉题目注释和测试代码）
3. 提交到力扣
4. 轮询并打印结果（通过 / 答案错误 / 编译错误 / 运行错误，带错误详情）

## 题目 slug 映射

| 力扣题号 | slug |
|---------|------|
| #26 | remove-duplicates-from-sorted-array |
| #27 | remove-element |
| #88 | merge-sorted-array |
| #283 | move-zeroes |
| #206 | reverse-linked-list |
| #21 | merge-two-sorted-lists |
| #141 | linked-list-cycle |

> 其他题目的 slug 看力扣题目 URL：`leetcode.cn/problems/<slug>/`

## 注意事项

- **先本地 `node xx.js` 跑通测试，再提交力扣**，避免无谓的失败提交。
- 脚本提取代码依赖练习文件的固定结构：顶部 `/** ... */` 题目注释 + 函数实现 + `// ===== 测试代码` 分隔线。新增练习题请沿用这个结构。
- 若力扣接口变更导致脚本失效，报错会明确提示，届时更新接口即可。
