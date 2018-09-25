var http = require('http');

var server = http.createServer();

server.on('request', function(req, res){
	//浏览器不知你是utf8编码的内容
	//中文操作系统默认是gbk,
	//res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	//res.end('123我来啦');

	var url = req.url;

	if (url==='/plain') {
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');  //text/plain普通文本
	    res.end('123我来啦');
	}else if (url==='/html') {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<p>hello大家 html</p>')
	}
});

server.listen(3846, function(){
	console.log('Server is running...');
});