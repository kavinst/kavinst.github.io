# 胡欣蕊的小宇宙 · XINRUI

一个粉嫩、轻盈、带一点浪漫主义的个人博客首页。为胡欣蕊（21 岁，牡丹江师范学院大四在读）制作，单页展示，双击即可打开，不需要安装任何依赖。

**线上地址：[https://kavinst.github.io/](https://kavinst.github.io/)**  
**GitHub 仓库：[kavinst/kavinst.github.io](https://github.com/kavinst/kavinst.github.io)**

## 这是什么

- **纯静态页面**：HTML + CSS + 原生 JavaScript，没有构建步骤、没有后端、没有外部 CDN。
- **粉色玻璃质感**：奶油粉、蜜桃、丁香紫渐变，搭配玻璃卡片、手绘感插画与柔光。
- **会动的细节**：飘落花瓣、打字机、滚动渐显、3D 倾斜肖像、滚动进度、爱心按钮、糖果罐、自定义光标。
- **认真做过的可访问性**：语义化结构、跳转到主内容、键盘焦点样式、`prefers-reduced-motion` 支持、无 JS 时内容仍可阅读。
- **本地优先**：所有插画、字体与脚本都在本地；没有统计代码，也没有任何请求会发到第三方。

## 直接打开

方式一：双击 `index.html`。

方式二：在本文件夹打开终端，运行：

```powershell
python -m http.server 8080
```

然后访问 <http://localhost:8080>。如果资源加载、字体或 localStorage 行为异常，优先使用本地服务器方式。

## 文件结构

```text
xinrui-blog/
├─ index.html              页面结构、文案、手记卡片、时间线、留言表单
├─ 404.html                自定义 404 页面
├─ robots.txt              搜索引擎抓取规则
├─ sitemap.xml             站点地图
├─ 905b240ff00b8525ebf5d262cd58d4a2.txt  IndexNow 站点验证文件
├─ .nojekyll               告诉 GitHub Pages 不要用 Jekyll 处理静态文件
├─ css/
│  └─ style.css            主题变量、布局、动效、响应式、打印样式
├─ js/
│  └─ main.js              交互、文章数据、糖果罐、主题切换、动效
├─ assets/
│  ├─ portrait.svg         首页插画肖像（可替换成真人照片）
│  ├─ og-cover.png         1200×630 分享预览图
│  ├─ cover-*.svg          六张手记封面
│  ├─ moment-*.svg         六张生活碎片
│  └─ favicon.svg          站点图标
├─ README.md
└─ THIRD_PARTY_NOTICES.md  第三方许可说明
```

## 上线前建议替换的内容

目前页面里的人生片段、手记、时间线和留言都是**示例内容**。正式送给她之前，建议至少替换以下几处：

1. **头像 / 肖像**
   当前 `assets/portrait.svg` 是一张为她定制的插画肖像，不是真人照片。
   如果有她喜欢的照片，可以准备一张 4:5 或 5:7 的图片（例如 `assets/portrait.jpg`），然后修改 `index.html` 中这一行：

   ```html
   <img src="assets/portrait.svg" alt="胡欣蕊的专属插画肖像" width="560" height="700">
   ```

   改成：

   ```html
   <img src="assets/portrait.jpg" alt="胡欣蕊的照片" width="560" height="700">
   ```

   同时可以把 `alt` 写得更具体。若不希望公开照片，保留插画也完全没问题。

2. **手记文章**
   文章正文在 `js/main.js` 顶部的 `articles` 对象里，结构如下：

   ```js
   'fourth-year': {
     title: '文章标题',
     category: '校园',
     date: '2026.10.18',
     read: '4 min',
     cover: 'assets/cover-campus.svg',
     body: `
       <p>第一段……</p>
       <blockquote>想强调的一句话</blockquote>
       <p>最后一段……</p>
     `
   }
   ```

   首页卡片本身在 `index.html` 的 `#notes` 区域，需要和 `articles` 里的键名（如 `fourth-year`）对应。正文使用受控的 HTML 字符串；如果改成用户可输入的内容，必须自行做转义。

3. **生活碎片**
   `#moments` 里的每张卡片通过 `data-full` 指定灯箱大图、`data-caption` 指定图注。替换 `assets/moment-*.svg`，或把路径改成自己的图片即可。

4. **年龄、年级与时间线**
   首页标签与关于我在 `index.html`；时间线内容也在 `index.html` 的 `#journey` 区域。

5. **页脚版权年份**
   `index.html` 页脚目前写的是 `© 2026 胡欣蕊`。

## 糖果罐（留言）

留言只保存在**当前浏览器自己的 localStorage** 里，键名是 `xinrui-sugar-v1`，最多保留 50 条。这意味着：

- 她能看到你自己浏览器里留下的糖；
- 其他访客看不到你留的糖，你也看不到其他访客的；
- 换浏览器、无痕模式或清理缓存后，留言会消失。

如果希望做成“所有访客都能看到”的公共留言板，需要接一个后端或托管服务，例如 Supabase、Firebase、Formspree（仅收邮件）、Vercel/Netlify Functions 等。把 `js/main.js` 里的 `loadSugarMessages`、`saveSugarMessages` 替换为接口请求，并在服务端做长度限制、频率限制与内容过滤；不要直接把用户输入拼进 `innerHTML`。

当前实现已经用 `textContent` 渲染留言，并限制名字 16 字、正文 120 字，避免把留言当 HTML 执行。

## 主题与动效

- 右上角月亮/太阳图标切换日间与晚安模式，主题保存在 `localStorage` 的 `xinrui-theme` 键。
- 如果系统开启“减少动态效果”，花瓣、爱心雨、部分浮动动画会自动关闭，内容仍完整可见。
- 所有图片都带 `width` / `height`，避免加载时布局跳动；页面没有使用外部字体，优先使用系统字体。

## 部署（当前使用 GitHub Pages）

站点已经部署在 **[https://kavinst.github.io/](https://kavinst.github.io/)**，仓库是 [kavinst/kavinst.github.io](https://github.com/kavinst/kavinst.github.io)。仓库名使用 `<用户名>.github.io`，所以网址直接是根域名，不需要子目录。

更新内容的方式：

1. 在本地修改 `xinrui-blog` 里的文件；
2. 打开仓库的 **Add file → Upload files**，把修改后的文件上传并提交；
3. GitHub Pages 会自动重新构建，通常 1–3 分钟后生效。也可以直接通过 GitHub Desktop 或 Git 推送。

其他可选部署方式：

- **Netlify Drop**：把整个 `xinrui-blog` 文件夹拖到 <https://app.netlify.com/drop>。
- **Vercel**：导入仓库，Framework Preset 选择 Other，输出目录留空。
- **自己的服务器**：把文件放进任意静态目录即可，入口是 `index.html`。

部署后建议检查：

- 手机 390px 宽度下导航菜单能打开、文章弹窗能滚动；
- 日间/晚安模式切换后刷新仍保持；
- 糖果罐提交后刷新仍在；
- 页面没有横向滚动条。

## 让搜索引擎收录

页面已经准备好了 `robots.txt`、`sitemap.xml`、canonical、Open Graph 分享图和 Person 结构化数据。**2026-10-23 已通过 IndexNow 提交首页**（接口返回 `202 Accepted`），Bing 等参与该协议的搜索引擎会开始抓取。

仍建议手动完成以下三处，覆盖范围更广：

1. **Google Search Console**：<https://search.google.com/search-console>，添加 `https://kavinst.github.io/`，用“HTML 标记”或“HTML 文件”方式验证，然后在“站点地图”里提交 `sitemap.xml`。
2. **Bing Webmaster Tools**：<https://www.bing.com/webmasters>，添加站点并提交 sitemap；IndexNow 已在用，这里可以查看抓取状态。
3. **百度搜索资源平台**：<https://ziyuan.baidu.com/>，添加站点、完成验证后提交 sitemap。百度需要登录账号并验证站点，无法由脚本代做。

提交后不会立刻出现在搜索结果里，通常需要几天到几周；新站、竞争较大的名字会更慢。只要站点持续可访问、内容稳定，搜索引擎会逐步抓取。想要更像正式个人站，可以在 GitHub Pages 设置里绑定自己的域名。

> 说明：`kavinst.github.io` 是 GitHub 免费二级域名，已启用 HTTPS，可以被搜索引擎正常收录。中国大陆网络访问 GitHub Pages 偶尔会慢或失败；如果主要给国内朋友看，后续可换国内静态托管或绑定自己的域名。

## 浏览器支持

面向现代浏览器：Chrome / Edge / Firefox / Safari 的较新版本。使用了 CSS `clip`、原生 `<dialog>`、`backdrop-filter`、`IntersectionObserver` 等特性。旧浏览器会有降级，但视觉效果不保证完全一致。

## 来源与许可

视觉方向参考了 MIT 许可的 [Candy Glass](https://github.com/medy17/Candy-Glass-React-Portfolio)，本站的 HTML、CSS、JavaScript 与全部 SVG 插画为独立实现。完整许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

---

Made with ♡ for Xinrui.
