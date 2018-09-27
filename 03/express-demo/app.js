//安装express插件
//引包
var express = require('express');

//创建服务器应用程序也就是http.createServer
var app = express();


//当服务器收到get请求/的时候，执行回调函数
app.get('/', function (req,res) {
	//在Express中可以直接req.query来获取查询字符串参数
	console.log(req.query)
	res.send('hello express!');
});

//昨天的可以变成
app.get('/pinglun', function (req, res) {
	//req.query;
});

app.get('/about', function (req,res) {
	res.send('你好!');
});

//公开指定目录
app.use('/public', express.static('./public'))

//相当于server.listen
app.listen(3000, function () {
	console.log('app is running at port 3000')
})
