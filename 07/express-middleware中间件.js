var express = require('express');

var app = express();


//不关心请求路径和请求方法的中间件
//任何请求都会进入这个中间件
//中间件本身是一个方法该方法接收三个参数
//request 请求对象
//response 响应对象
//next 下一个中间件
app.use(function (req, res, next) {
	console.log('请求进来了1');
	next();//默认不往后走，加next就可以
});

app.use(function (req, res, next) {
	console.log('请求进来了2'); //这不加next下面/a进不来
	next();
});


//以/xx开头的路径中间件
app.use('/a', function (req, res, next) { //  /a或/a/..能进来（上面要加next）
	console.log('请求进来了a');
	next(); //这里不加next 下面
});

app.use(function (req, res, next) { 
	console.log('请求进来了3'); //上面不加next也能进来	（不是/a路径的情况下可以，只要无路径的有next）
	next();
});

app.use('/a/b', function (req, res, next) { //上面加next才能进
	console.log('请求进来了a 2');
	//next();
});

app.use('/b', function (req, res, next) { //  上面不加next /b能进来（但无路径的有next）
	console.log('请求进来了b');
});



//除了以上，还有一种最常用的
//严格匹配请求方法和请求路径的中间件
//app.get
//app.post


//配置一个全局错误处理中间件
app.use(function (req, res) {
  res.render('404.html');
});

//错误处理,举例
app.get('./dasdadasda/edadas', function (req, res, next) {
  fs.readFile('.d/dasd/adsasdad/adasdad', function (err, data) {
  	if (err) {
  		//return res.status(500).json({err_code: 500, message: '服务端错误'});
  		next(err); //当这调用next 若果有err不为null，则直接跳过中间所有代码找到下四个参数的输出 
  	}
  })  
})


app.use(function (err, req, res, next) {
	return res.status(500).json({err_code: 500, message: '服务端错误'});
  console.log('报错啦')  	
})

app.listen(3000, function() {
	console.log('running--3000');
})