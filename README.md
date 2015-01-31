pandoraui.com
=============

## 关于Pandora

潘多拉（Pandora，也译作潘朵拉），希腊神话中火神赫淮斯托斯用粘土做成的地上的第一个女人，作为对普罗米修斯盗火的惩罚送给人类的第一个女人。众神亦加入使她拥有更诱人的魅力。

根据神话，潘多拉出于好奇打开一个「魔盒」（应作坛子，希腊文原作πίθος，πίθοι，英语：pandora's box）释放出人世间的所有邪恶——贪婪、虚无、诽谤、嫉妒、痛苦等等，当她再盖上盒子时，**只剩下希望在里面**。Pandora 放出了邪恶，却把最大的希望留在了盒子里，如今她为我们所承受的困苦要做一个解决方案，把希望带给大家，并取名 Pandora 项目。

Pandora 第一站——**前端解决方案**，接下来就让我们看看 **Pandora** 的表现吧！

## 前言

> 经验告诉我们，不要重复发明轮子

Pandora 前端框架（以下简称 Pandora）是基于 [cnBootstrap](https://github.com/webcoding/cnBootstrap) 制作的前端开发框架。考究借鉴 twitter Bootstrap 的设计思想，并结合中文排版布局(参照sofish的typo.css)的特点进行界面实现。其内部组件实现则根据简单有效为先，可维护性第一原则进行设计，达到了一处实现多处可用的效果。

其中 cnBootstrap 集成了(sofish)旧版AliceUI 兼容解决方案（包括但不限于AliceUI），通过整合各类兼容性解决方案，cnBootstrap已经具备大量的解决方案实例。现转移到pandora中进一步完善...

## 开发规划

#### 仓库目录结构：

```js
devguide
|- public        //项目发布静态资源
|   |- fonts
|   |- icons
|   |- js
|   |- images
|
|- src           //项目开发资源
|   |- img
|   |- sass
|   |- js
|   |   |-vendor //外部依赖
|
|- views/        //layout模板
|- lib/       |--//服务类脚本
|- server.js  |
|- test/         //测试
|- gulp          //批处理task
|- _site         //生成UED稿
|- vendor        //外部工具
|
|- test          //集成测试
|- tools         //工具箱
|- modules       //模块组件(**重点**)
|   |- module    //模块名，各对应独立项目，如：[button](https://github.com/pandoraui/button)
|       |- src   //模块对应的资源
|
|- examples      //经典应用实例
|- theme         //主题
|- docs          //jsdoc自动生成的文档
|- labs          //前端实验室，用于pandora前端的实践
|   |- layout    //布局研究
|   |- css3      //css3特效研究
|
|- README.md
```

####项目框架设计

可服务器端渲染，亦可本地单页面应用操作

```js
src/js
|- /app           //项目文件
|   |- app.js           //主程序
|   |- config.js        //配置
|   |- router.js        //路由
|   |- settings.js      //默认设置
|   |- db.js            //*数据
|   |- appcache.js      //*缓存
|   |- searcher.js      //*搜索
|   |- shortcuts.js     //*快捷键
|
|- /lib           //库文件
|   |- events.js        //事件基类
|   |- page.js          //微客户端路由
|   |- util.js          //工具包
|   |- *ajax.js         //*ajax请求处理
|   |- *store.js        //*缓存处理
|
|- /models        //模型
|   |- doc.js           //
|   |- entry.js         //
|   |- model.js         //
|   |- type.js          //
|
|- /collections   //集合
|   |- collection.js    //
|   |- docs.js          //
|   |- *entries.js      //
|   |- *types.js        //
|
|- /views         //视图
|   |- view.js          //
|   |- /layout
|   |- /content
|   |- /pages
|   |- /sidebar
|   |- /search
|   |- /list
|   |- /misc
|
|- /templates     //模板
|   |- base.js          //
|   |- error_tmpl.js
|   |- notice_tmpl.js
|   |- notif_tmpl.js
|   |- path_tmpl.js
|   |- sidebar_tmpl.js
|   |- /pages
|   |   |- about_tmpl.js
|   |   |- help_tmpl.js
|   |   |- new_tmpl.js
|   |   |- offine_tmpl.js
|   |   |- root_tmpl.js
|   |   |- type_tmpl.js
|
|- /test           //测试
|- /vendor         //外部依赖
|   |- zepto.js
|   |- underscore.js
|   |- fastclick.js
|   |- cookies.js
|   |- prism.js
|   |- raven.js
|
|- /data          //数据
|   |- docs.js          //首页数据
|   |- news.json        //更新提醒数据
|
|- application.js     //应用入口
|- debug.js           //调试及检测
|
|- README.md
```


#### 文档结构

使用HTML5布局标签及CSS3效果，并普及精简模式(如：http://缩写为// 省略type="text/css" type="text/javascript"等)

#### 阅读 HTML5/CSS3 标准文档

标准化文档项（Standard Specs），目前主要是对 HTML5/CSS3 这些较新的标准技术进行的标准文档研究。使用于标准布道。让更多不熟悉相关技术的人可以阅读更易懂的文档、了解需要注意的点和知悉相关的解决方案。后续计划是产出网站应用新技术的渐进增强方案和实践解决方案。

## Git管理工具指南 

本项目使用Git管理，如果您对Git的使用不甚熟悉，可以参考[useGit使用指南](https://github.com/pandoraui/useGit)项目，包含详细的Git教程讲解以及Git常用命令。

## 版权和许可 

基于 [MIT License](http://en.wikipedia.org/wiki/MIT_License "WikiPedia 中关于 MIT License 的描述") 开源。
