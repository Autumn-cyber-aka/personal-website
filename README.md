# 个人网站

一个使用原生 HTML、CSS 和 JavaScript 构建的响应式个人主页。网站采用深色科技风，用于展示个人介绍、技能、项目和联系方式，无需构建工具或前端框架。

## 页面内容

- 固定顶部导航与移动端折叠菜单
- 首页个人介绍
- 关于我与学习信息
- 分类技能卡片
- 响应式项目卡片
- GitHub 与邮箱联系方式
- 键盘焦点、跳转链接和减少动画等无障碍支持

## 本地预览

可以直接用浏览器打开 `index.html`。为了更接近正式部署环境，也可以在当前目录启动静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布前需要替换

在 `index.html` 中搜索以下内容并替换成真实资料：

- `你的名字`
- `你的学校`
- 个人介绍和学习方向
- 技能名称
- 三个项目的名称、介绍和技术栈
- `hello@example.com`
- `https://github.com/`

项目链接准备好之前不要添加空链接。真实项目可在卡片底部加入“查看源码”和“在线演示”按钮。

同时修改 `<title>` 和 `<meta name="description">`，确保搜索结果能准确介绍本人。

## 文件结构

```text
.
├── index.html   # 页面结构与内容
├── styles.css   # 视觉设计与响应式布局
├── script.js    # 移动导航与导航状态
└── README.md    # 使用和维护说明
```

## 部署

该网站没有构建步骤，可以直接部署到 GitHub Pages、Cloudflare Pages、Netlify 或 Vercel。部署到 GitHub Pages 时，将仓库的 Pages 来源设置为包含这些文件的分支和根目录即可。
