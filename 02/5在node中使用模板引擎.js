//安装
//npm install art-template
//命令在哪执行就把包下哪里
//install的名字是什么，就require什么
var template = require('art-template');

//这里不是浏览器
//template('script 标签 id', {对象})

//
//
//这样用
//template.render('模板字符串', 替换对象);

var fs = require('fs');

fs.readFile('./template.html', function (err, data) {
  if (err) {
  	console.log('read fail');
  	return;
  }
  data = data.toString();
  var ret = template.render(data, {
	name: 'jack'
  });

  console.log(ret);

})

