var http = require('http');

var fs = require('fs');

var server = http.createServer();

server.on('request', function(req, res){
      
      var url = req .url;

      if (url === '/') {
             fs.readFile('./resourse/index.html',function(error, data){
             	if(error){
             		res.setHeader('Content-Type','text/plain; charset=utf-8');
             		res.end('读取文件失败');
             	}else{
             		res.setHeader('Content-Type','text/html; charset=utf-8');
             		//res.end(data.toString());
             		res.end(data);
             	}
             })
      }
	
});

server.listen(3846, function(){
	console.log('Server is running...');
});