var express = require('express');
var path = require('path');//path 是 Node 本身提供的一个核心模块，专门用来处理路径
var bodyParser = require('body-parser');
var session = require('express-session');//session!!!!
var router =require('./routes');
var app = express();

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, './views/'));//默认目录，不写也行

app.use('/public/', express.static(path.join(__dirname, './public/')));//转为绝对路径（__dirname动态绝对路径）
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat', //配置加密字符串，增加安全性
  resave: false,
  saveUninitialized: true
}));

app.use(router);

//配置一个处理404中间件
app.use(function (req, res) {
  res.render('404.html');
});

//配置一个全局错误处理中间件
app.use(function (err, req, res, next) { //有错误要在路由中加next(err)
  res.status(500).json({err_code: 500, message: '服务端错误'});
})

app.listen(3000, function() {
  console.log('running--3000')
})

