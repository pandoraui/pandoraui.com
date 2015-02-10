#项目框架设计

可服务器端渲染，亦可本地单页面应用操作，以下为本地操作的设计

```js
src/js
|-  data          //入口
|     App.js
|     docs.js           //首页数据
|     news.json         //更新提醒数据
|
|- /lib           //库文件
|   |- events.js        //事件基类
|   |- page.js          //微客户端路由器
|   |- util.js          //工具包
|   |- ajax.js          //ajax请求处理
|   |- store.js         //缓存处理
|
|- /app           //项目文件
|   |- app.js           //主程序
|   |- config.js        //配置
|   |- router.js        //路由
|   |- settings.js      //默认设置
|   |- db.js            //数据
|   |- appcache.js      //缓存
|   |- searcher.js      //搜索
|   |- shortcuts.js     //快捷键
|
|- /models        //模型
|   |- model.js         //模型
|   |- doc.js           //
|   |- entry.js         //
|   |- type.js          //
|
|- /collections   //集合
|   |- collection.js    //
|   |- docs.js          //
|   |- entries.js       //
|   |- types.js         //
|
|- /views         //视图
|   |- view.js          //基本视图
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
|- application.js     //应用入口
|- debug.js           //调试及检测
|
|- README.md
```

##流程控制

首先请求一个静态页面，然后加载资源，即开始工作，重新渲染内容，处理数据

index.html

加载资源

读取基本的config配置的数据

然后根据config数据去model拿资源

读store（成功则返回）
或ajax请求数据-请求成功后存数据

拿到数据后触发ready事件，然后去拿模板进行渲染



