var http = require('http');

var fs = require('fs');

var template=require('art-template');

var server = http.createServer();

var wwwDir = 'D:/GitHub/node.js--learning/02/www/'

server.on('request', function (req, res) {
  var url = req.url;
  fs.readFile('./template-apache.html', function (err, data) {
  	if (err) {
  		return res.end('404');
  	}

    fs.readdir(wwwDir, function (err, files) {
    if (err) {
    	return res.end('can not find www dir');
    }

    data = data.toString();

    htmlStr = template.render(data,{
      title: '哈哈哈',
      files: files
    })

  	res.end(htmlStr);   
    })  
  })
})



server.listen(3000, function () {
  console.log('running...');	
})