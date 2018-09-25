//构建服务器
//核心模块：http   帮你创建编写服务器
//
var http = require('http');

var server = http.createServer();

//服务器：数据的服务

//注册request请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理
server.on('request', function(){
     console.log('copy that');   
});
//绑定端口号，启动服务器
server.listen(3001, function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3001/来访问');
});

