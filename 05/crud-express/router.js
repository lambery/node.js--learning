var fs =require('fs');

var Student = require('./students');
//express提供了一种更好的方式
//专门用来包装路由的
var express = require('express');

//创建一个路由容器
var router = express.Router();

//加载在容器中
router.get('/', function (req, res) { 
  Student.find(function (err, students) {
  	if (err) {
    	return res.status(500).send('server error');
    }
    res.render('index.html', {
    	fruits: ['1','2','3'],
    	students: students
    });

  });
});
  
router.get('/students/new',function (req, res) {
  res.render('new.html');
});

router.post('/students/new',function (req, res) {
  //获取表单数据
  //处理表单数据
  //发送响应
  //console.log(req.body);
  new Student(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('server error');
    }
    res.redirect('/'); 
    });  
});

router.get('/students/edit',function (req, res) {
  Student.findById(req.query.id.replace(/"/g,''), function (err, student){
    if (err) {
      return res.status(500).send('server error');
    }
    res.render('edit.html',{student});

  });
});

router.post('/students/edit',function (req, res) {
  var id =req.body.id.replace(/"/g, '');
  Student.findByIdAndUpdate(id, req.body ,function (err) {
   if (err) {
    return res.status(500).send('server error');
   }
   res.redirect('/'); 
  })	
});


router.get('/students/delete',function (req, res) {
	Student.findByIdAndRemove(req.query.id.replace(/"/g,''), function (err) {
		if (err) {
		  return res.status(500).send('server error');
		}
		res.redirect('/'); 
	})
});
//把router导出
module.exports = router;




//这样不方便,用上方法
// module.exports = function (app) {

//   app.get('/', function (req, res) {
//   fs.readFile('./db.json','utf8',function (err, data) {
//     if (err) {
//     	return res.status(500).send('server error');
//     }
//     res.render('index.html', {
//     	fruits: ['1','2','3'],
//     	students: JSON.parse(data).students
//     })
//   })
  
//   });
  
//   app.get('/students',function (req, res) {
  	
//   });
  
//   app.get('/students',function (req, res) {
  	
//   });
  
//   app.get('/students',function (req, res) {
  	
//   });
  
//   app.get('/students',function (req, res) {
  	
//   });
  
//   app.get('/students',function (req, res) {
  	
//   });
  
// }