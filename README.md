# Node.js + mongoDB + glup 搭建的电影网站

> Node.js + mongoDB 搭建的电影网站


``` bash
npm install -----安装依赖

node app -----运行(需提前安装并启动mongodb)

gulp build -----打包

gulp -----打包后运行
```

## 前言
此项目是基于 Node.js + Express + mongoDB + Bootstrap + gulp 搭建的电影网站。

## 实现功能
- [x] 前台电影展示页
- [x] 电影详情页
- [x] 后台电影管理中心（电影录入、电影修改）
- [x] 用户登录注册注销功能
- [x] 后台用户管理中心（用户录入、用户修改）
- [x] 电影评论
- [x] 电影分类管理（分类录入、修改）
## 预览
在线预览地址 👉 http://movie.qirenji.com/

电影首页

![电影首页](http://www.qirenji.info/img/movie-node/index.png)

登录页

![登录页](http://www.qirenji.info/img/movie-node/login.png)

电影录入页

![电影录入页](http://www.qirenji.info/img/movie-node/admin.png)

电影列表页

![电影列表页](http://www.qirenji.info/img/movie-node/movielist.png)

电影分类页

![电影分类页](http://www.qirenji.info/img/movie-node/category.png)



## 技术栈
【前端】
- HTML/CSS/JS：亘古不变三件套
- ES6：ECMAScript 新一代语法，这也是以后的趋势
- Monment.js：时间日期格式化插件
- jQuery：主要用到 jQuery 的 ajax 方法处理异步请求和 DOM 操作
- Bootstrap：页面 UI 框架，天然响应式
- 用SCSS做CSS预处理语言。

【后端】

- pug：pug (以前的 jade) 是一个高性能的模板引擎，用来生成 HTML
- Node.js：整个后端由 Node.js 驱动；用 npm 安装资源文件
- Express：一个基于 Node.js 平台的 web 开发框架，由路由和中间件构成

【数据库】

- mongoDB：进行数据存储的 NoSQL 数据库

【自动化构建】

- gulp：前端自动化构建工具

【部署工具】
- pm2:  Node 应用的进程管理器。

## 目录结构


```
|-- movie-node                       // 项目根目录
|   |-- app                          // 后台相关目录
|       |-- controllers              // 控制层
|       |-- models                   // 数据模型
|       |-- schemas                  // 模型结构
|       |-- views                    // 视图层
|   |-- config                       // 路由管理
|   |-- movie-backup                 // 数据库备份
|   |-- public                       // 公用资源
|       |-- dist                     // 公共资源打包目录
|       |-- images                   // 公用图片
|       |-- sass                     // 公用样式（初始化等）
|       |-- scripts                  // 脚本交互文件
|   |-- App.js                       // 程序入口文件
|   |-- ecosystem.json               // pm2配置文件
|   |-- gulpfile.js                  // gulp配置文件
|   |-- package.json                 // 项目配置信息


```

## 总结

1. 熟悉了 pug 的语法及其在 Node.js 中的使用方法
2. 初步掌握了 express 框架的使用，如何处理路由以及中间件
3. 掌握了 mongoose 在 Node.js 中如何连接数据库，以及 schema、model 的使用
4. 前后端数据传递与视图展现的流程
5. 学会了使用 bcryptjs（Node.js 的一个加解密模块）对密码进行 “hash + salt” 处理
6. 借助会话与 cookie 进行用户识别和持久化


## About
关于我: http://www.qirenji.info/about

GitHub: https://github.com/qirenji/

E-mail: lyf@qirenji.com
