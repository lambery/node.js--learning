//require是一个方法，加载模块用
//在node中，模块有三种：
//具名的核心模块，如fs
//用户自己编写的文件模块
//相对路径加点 ./不能省略 可以省略后缀名
//
//在node中，没有全局作用域 ，只有模块作用域
//如在a定义一个函数，b不能用，
//但可以用exports对象来加载导出  如在b.js中exports.foo='hello'
console.log('a.start');
//require('./b.js');
require('./b');
console.log('a end');