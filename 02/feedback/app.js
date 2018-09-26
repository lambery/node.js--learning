//application应用程序
//
var http =require('http');
var fs = require('fs');
var template = require('art-template');
var getUrl = require('url');

var comments = [
  {
  	name: '张三1',
  	message: 'nice day!!',
  	dataTime: '2016-10-10'
  },
  {
  	name: '张三2',
  	message: 'nice day!!',
  	dataTime: '2016-10-10'
  },
  {
  	name: '张三3',
  	message: 'nice day!!',
  	dataTime: '2016-10-10'
  },
  {
  	name: '张三4',
  	message: 'nice day!!',
  	dataTime: '2016-10-10'
  },
]

http
.createServer(function (req, res) {
  var parseObj = getUrl.parse(req.url, true);//	getUrl.parse方法将路径解析为一个方便操作的对象，true表示将查询字符串name=2112&message=12121212转为一个对象（query属性访问）
  //var url = req.url;

  //单独获取获取不包含？之后的（如获取到/public）
  var pathname = parseObj.pathname;

  if (pathname === '/') {
  	fs.readFile('./views/index.html', function (err, data) {
  		if (err) {
  			return res.end('404 Not Find.');
  		}
  	    //console.log(pathname);
  	    data = data.toString();
  	    htmlStr = template.render(data, {comments});
  		res.end(htmlStr);
  	})
  } else if (pathname === '/post') {
  	  fs.readFile('./views/post.html', function (err, data) {
  	 	if (err) {
  	 		return res.end('404!');
  	 	} 
  	 	res.end(data);
  	 })
  } else if (pathname.indexOf('/public/') === 0) {
  	 // console.log(pathname);
  	 fs.readFile('.' + pathname, function (err, data) {
  	 	if (err) {
  	 		return res.end('404!');
  	 	} 
  	 	res.end(data);
  	 }) 
  } else if (pathname === '/pinglun') {
  	//console.log('收到表单请求', parseObj.query);
  	var comment = parseObj.query;
  	comment.dataTime = '2017-10-10';
  	comments.unshift(comment);
  	res.statusCode = 302; //状态码设置为302临时重定向,客户端收到就会自动去响应头找location
  	res.setHeader('Location', '/');
  	res.end();
  } else {
  	 	fs.readFile('./views/404.html', function (err, data) {
  	 	if (err) {
  		return res.end('404 Not Find.');
  		}
  		res.end(data);
  	 	})
  	 }
})
.listen(3000, function () {
	console.log('running...');
})