
var http = require('http');

var server = http.createServer();


//request 请求事件处理函数，需要接受2个参数
//request请求对象：可以用来获取客户端的一些请求信息，例如请求路径
//respons响应对象   可以给客户端发送响应消息
server.on('request', function(request, response){
//	http://127.0.0.1:3001/
//	http://127.0.0.1:3001/a/a
    
     console.log('copy that,请求路径是：'+request.url);   

     //response有个方法：write 可以给客户端发送响应数据
     //可以使用多次，但要用end结束响应
     
     if (request.url==='/index' || request.url==='/') {
     	response.write('index');
        response.end();    
     }else if (request.url==='/login') {
     	//response.write('login');
        response.end('login'); //这简单点   
     }else{
     	response.end('404!!!!!!!!');//响应内容只能是字符串或二进制
     }
 
});

//绑定端口号，启动服务
server.listen(3001, function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3001/来访问');
});

