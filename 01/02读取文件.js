//node中的js有文件操作的能力
//fs是file-system的简写
//要引入fs这个核心模块
//fs.readFile用来读取文件
//
//使用require方法加载fs核心模块
var fs = require('fs');

//读取文件
//成功 data数据      error null
//失败 data undefined     error 错误对象
fs.readFile('hello.txt', function(error, data){
    //<Buffer 68 65 6c 6c 6f 20 74 58 74> 默认2进制数据转为16进制
    //可以通过toString
    console.log(data);
    console.log(data.toString());

    if (error) { //null不执行
    	console.log('读取文件失败') 
    }
}) 