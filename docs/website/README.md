---
sidebar: auto
---

# 推荐库

**这里主要推荐一下自己平时常用，提高效率的一些库和软件。**

## 前端常用

- [**sweetalert2**](https://github.com/sweetalert2/sweetalert2) 一个自适应，且自定义性强的弹出框（零依赖）
- [**tippy.js**](https://github.com/atomiks/tippyjs) 最著名的 tooltip/popover library
- [**text-mask**](https://github.com/text-mask/text-mask) 可以让 input 按照规则输入(如电话,email,日期,信用卡等)，特殊格式 input
- [**dinero.js**](https://github.com/sarahdayan/dinero.js) 用来创建、计算和格式化货币价值的不可变的框架，支持国际化
- [**lerna**](https://github.com/lerna/lerna) 大项目版本控制工具，项目中可以有多个 package.json 文件
- [**img-2**](https://github.com/RevillWeb/img-2) 一个提高图片加载性能和体验的库，懒加载使用 web worker 模糊预览
- [**fingerprintjs**](https://github.com/Valve/fingerprintjs2) 是一个快速的浏览器指纹库，通浏览环境的一系列配置生成 id
- [**ajv**](https://github.com/epoberezkin/ajv) 一个 json schema 验证的库
- [**dayjs**](https://github.com/xx45/dayjs) 一个轻量级类 moment.js API 时间库
- [**primjs**](https://github.com/PrismJS/prism) 让页面支持代码高亮
- [**ReLaXed**](https://github.com/RelaxedJS/ReLaXed) 一个将 document html 转成 PDF 的工具
- [**uppy**](https://github.com/transloadit/uppy) 一个很好看的也很好用的 前端上传库
- [**Filepond**](https://github.com/pqina/filepond) 一个小巧的文件上传库
- [**tui-calendar**](http://ui.toast.com/tui-calendar/) 功能全面的日程安排日历控件，还支持拖拽
- [**tui.editor**](https://github.com/nhnent/tui.editor) markdown 所见即所得编辑器
- [**tabler**](https://github.com/tabler/tabler) 基于 Bootstrap 4 的 Dashboard UI Kit 和美观 高颜值 ui

# 网络

## WebSocket

### WebSocket 与 HTTP 什么关系呢？

简单来说，WebSocket 是一种协议，是一种与 HTTP 同等的网络协议，两者都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

### WebSocket 与 Socket

网络应用中，两个应用程序同时需要向对方发送消息的能力（即全双工通信），所利用到的技术就是 socket，其能够提供端对端的通信。对于程序员而言，其需要在 A 端创建一个 socket 实例，并为这个实例提供其所要连接的 B 端的 IP 地址和端口号，而在 B 端创建另一个 socket 实例，并且绑定本地端口号来进行监听。当 A 和 B 建立连接后，双方就建立了一个端对端的 TCP 连接，从而可以进行双向通信。

WebSocekt 是 HTML5 规范中的一部分，其借鉴了 socket 的思想，为 client 和 server 之间提供了类似的双向通信机制。同时，WebSocket 又是一种新的应用层协议，包含一套标准的 API；而 socket 并不是一个协议，而是一组接口，其主要方便大家直接使用更底层的协议（比如 TCP 或 UDP）

### 什么是 Socket.IO

Socket.IO 是一个封装了 Websocket、基于 Node 的 JavaScript 框架，包含 client 的 JavaScript 和 server 的 Node。其屏蔽了所有底层细节，让顶层调用非常简单。

另外，Socket.IO 还有一个非常重要的好处。其不仅支持 WebSocket，还支持许多种轮询机制以及其他实时通信方式，并封装了通用的接口。这些方式包含 Adobe Flash Socket、Ajax 长轮询、Ajax multipart streaming 、持久 Iframe、JSONP 轮询等。换句话说，当 Socket.IO 检测到当前环境不支持 WebSocket 时，能够自动地选择最佳的方式来实现网络的实时通信。