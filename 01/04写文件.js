var fs = require('fs');


fs.writeFile('./data/你好.md', 'hello，everybody', function(error){
    //成功 error null
    //失败 error 错误对象
    
    if (error) {
        console.log('文件写入fail');

    }else{
        console.log('文件写入成功');
    }
});