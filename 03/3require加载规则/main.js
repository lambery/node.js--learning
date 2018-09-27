require('./a.js');
require('./b.js');

//b.js 只会加载一次//优先从缓存加载
//
//
//核心模块 require('fs');
//路径形式的文件模式 如require('./b.js');
//第三方模块(node_modules)  如 require('art-template');