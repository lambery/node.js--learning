var fs =require('fs');

var dbPath = './db.json';

//获取
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
  	if (err) {
  		return callback(err);
  	}
  	callback(null, JSON.parse(data).students);
  })
};

//获取一个
exports.findById = function(id, callback){
	fs.readFile(dbPath, 'utf8', function (err, data) {
  	if (err) {
  		return callback(err);
  	}
  	var students = JSON.parse(data).students;
  	var ret = students.find(function (item) {
  		return item.id === parseInt(id);
  	})
  	callback(null, ret);
  })
}

//添加保存
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
  	if (err) {
  		return callback(err);
  	}
  	var students = JSON.parse(data).students;
  	student.id = students[students.length - 1].id + 1;
  	students.push(student);
  	var ret = JSON.stringify({students: students});
  	fs.writeFile(dbPath, ret, function (err) {
  		if (err) {
  			return callback(err);
  		}
  		callback(null);
  	});
  })
}


//更新
exports.updateById =function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
  	if (err) {
  		return callback(err);
  	}
  	var students = JSON.parse(data).students;
  	student.id = parseInt(student.id);
  	//Ecmascript中一个数组方法
  	var stu = students.find(function (item) {
  		return item.id === student.id;
  	})
    
    //遍历拷贝对象
  	for (var key in student) {
  		stu[key] = student[key];
  	}

  	var ret = JSON.stringify({students: students});
  	fs.writeFile(dbPath, ret, function (err) {
  		if (err) {
  			return callback(err);
  		}
  		callback(null);
  	});
  })	
}

//delete
exports.delete =function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
  	if (err) {
  		return callback(err);
  	}  
  	var students = JSON.parse(data).students;
  	var num = students.findIndex(function (item) {
  		return item.id === parseInt(id);
  	})
  	students.splice(num,1);
  	var ret = JSON.stringify({students: students});
  	fs.writeFile(dbPath, ret, function (err) {
  		if (err) {
  			return callback(err);
  		}
  		callback(null);
  	});
  })
}