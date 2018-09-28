var express = require('express');

var app = express();

var bodyParser = require('body-parser');

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

//配置使用art-template模板引擎,'htnl'是后缀名可以改
app.engine('html', require('express-art-template'));

//配置body-parser中间件（插件，专门用来解析表单post请求体）
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  //views目录是个约定，不用加路径	
  res.render('index.html', {comments});
});

app.get('/post', function (req, res) {
  res.render('post.html');
});

app.use('/public', express.static('./public/'));

//post请求
app.post('/post', function (req, res) {
	//var comment = req.query;//只能拿get请求参数
    var comment = req.body;//需要用到body-parser插件
	comment.dataTime = '2017-10-10';
	comments.unshift(comment);
    
	//res.statusCode = 302;
	//res.setHeader('Location', '/');
	//res.send();
	
	res.redirect('/');//express的，等同于上面注释的
	//console.log(req.body);
});


app.listen(3000, function () {
  console.log('running....3000');
});