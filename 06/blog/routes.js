var fs = require('fs');
var express = require('express');
var router = express.Router();
var User = require('./models//users');
var md5 = require('blueimp-md5');

router.get('/' , function (req, res) {
	//console.log(req.session.isLogin);
	res.render('index.html', {
    user: req.session.user
	});	
});

router.get('/login' , function (req, res) {
	res.render('login.html');	
});

router.post('/login' , function (req, res, next) {
	var body = req.body;
	User.findOne({
		email: body.email,
		password: md5(md5(body.password))
	}, function (err, data) {
		if (err) {
			//console.log('111')
			//return res.status(500).json({err_code: 500, message: '服务端错误'});
		  return next(err);
		}
		if (data) {
			//邮箱和密码正确
			//console.log('登陆成功');
			req.session.user = data;
			return res.status(200).json({err_code: 0, message: '登陆成功'})
		} else {
			//console.log('登陆不成功');
			return res.status(200).json({err_code: 1, message: '邮箱或密码错误'})
		}
	})
});

router.get('/logout' , function (req, res) {
	//console.log(req.session.user);
	req.session.user = null;
	//console.log(req.session.user);
	res.redirect('/login'); 	
});

router.get('/register' , function (req, res) {
	res.render('register.html');	
});

router.post('/register' , function (req, res, next) {
	var body = req.body;
	User.findOne({
    $or: [
      {
      	email: body.email
      },
      {
      	nickname: body.nickname
      }
    ]
	}, function (err, data) {
		if (err) {
			//return res.status(500).json({err_code: 500, message: '服务端错误'});
			return next(err);
		}
		if (data) {
			//邮箱或者昵称存在
			return res.status(200).json({err_code: 1, message: '邮箱或者昵称存在'})
		}
		//对密码重复加密
		body.password = md5(md5(body.password));
		new User(body).save(function (err, user) {
			if (err) {
			//return res.status(500).json({err_code: 500, message: '服务端错误'});
			return next(err);
			}
			req.session.user = user; //----------
		  res.status(200).json({ //express提供的一个方法，该方法接收一个对象为参数，并转为字符串发给浏览器
		  	err_code: 0,
		  	message: 'ok'
		  })			
		})
	})	
});



module.exports = router;