var http = require('http');

var fs = require('fs');

var server = http.createServer();

var wwwDir = 'D:/GitHub/node.js--learning/02/www/'

server.on('request', function (req, res) {
  var url = req.url;
//  if (url === '/') {
//  	res.end('hello');
//  } else {
//  	res.end('404!!!!!');
//  }
//});
//if (url === '/') {
//	fs.readFile(wwwDir + '/index.html', function (err, data) {
//	  if (err) {
//	  	res.end('404!!');
//	  	return;
//	  }	
//	  res.end(data);
//	})
//}
  var filePath = '/index.html';
  if (url !== '/') {
  	filePath =url;
  };

  fs.readFile(wwwDir + filePath, function (err, data) {
  	if (err) {
  		res.end('404!');
  	}
  	res.end(data);
  })
})



server.listen(3000, function () {
  console.log('running...');	
})