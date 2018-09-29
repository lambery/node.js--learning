var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

//设计集合结果
var userSchema = new Schema({
  usrname: {
  	type: String,
  	required: true
  },
  password: {
  	type: String,
    require: true
  },
  email: {
  	type: String,
  }
});

//将文档结构发布为模型
var User = mongoose.model('User', userSchema); //库里会变成users ，db.users.find();

//增加数据
// var admin = new User({
// 	usrname: '张三',
// 	password: '123456',
// 	email: 'admin@qq1.com'
// });

// admin.save(function (err, ret) {
// 	if (err) {
// 	  console.log('保存失败');
// 	} else {
// 	  console.log('保存成功');
// 	  console.log(ret);
// 	}
// })

//查询数据
// User.find(function (err, ret) {
// 	if (err) {
// 		console.log('查询失败');
// 	} else {
// 		console.log(ret);
// 	}
// })

//按条件查询数据 findOne就是对象，否则是数组
// User.find({
// 	usrname: '张三'
// }, function (err, ret) {
// 	if (err) {
// 		console.log('查询失败');
// 	} else {
// 		console.log(ret);
// 	}
// })

//删除
// User.remove({usrname: '张三'}, function (err, ret) {
// 	if (err) {
// 		console.log('删除失败');
// 	} else {
// 		console.log('delete success');
// 	}
// })

//更新数据
User.findByIdAndUpdate('5baf4a7b0f01600e40d91f2d', {password: '123'}, function (err ,ret) {
	if (err) {
 		console.log('更新失败');
 	} else {
 		console.log('更新success');
 	}
})