# 个人主页

一个使用原生 HTML、CSS 和 JavaScript 制作的简洁个人主页，用于展示个人介绍、技能、项目和联系方式。

## 设计方向

网站采用内容优先的学术主页风格：窄版正文、克制配色、清晰分节和紧凑项目列表。页面没有复杂动画、外部字体或前端框架。

## 本地预览

直接使用浏览器打开 `index.html`，或者在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布前需要修改

请在 `index.html` 中替换以下示例内容：

- `你的名字` 和 `Your Name`
- `你的学校`
- 个人介绍、专业方向和技能
- 三个项目的名称、说明和技术栈
- `hello@example.com`
- `https://github.com/` 和 `github.com/your-name`
- “照片”占位区域；可换成真实的 `<img>` 元素

项目链接准备好之前不放空按钮。添加真实链接时应使用明确的“源码”或“演示”文字。

## 文件说明

- `index.html`：页面内容与语义结构
- `styles.css`：排版、配色与响应式布局
- `script.js`：移动端导航和当前栏目状态
- `README.md`：维护与发布说明

## 部署

本项目没有构建步骤，可以直接部署到 GitHub Pages、Cloudflare Pages、Netlify 或 Vercel。
