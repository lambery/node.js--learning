var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test',{useMongoClient: true});

var userSchema = new Schema({
  email :{
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now //这里不要写Date.now(),  因为会即刻调用从而会写死
  },
  last_modified_time: {
    type: Date,
    default: Date.now //这里不要写Date.now(),  因为会即刻调用从而会写死 	
  },
  avatar: {
  	type: String,
  	default: '/public/img/avatar-default.png'
  },
  bio: {
  	type: String,
  	default: ''
  },
  gender: {
  	type: Number,
  	enum: [0,1,-1],
  	default: -1
  },
  birthday: {
  	type: Date,
  },
  status: {
  	type: Number,
  	enum: [0,1,2],  // 1不可以评论，2不能登陆使用
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema); 