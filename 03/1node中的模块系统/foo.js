var foo = 'bar';

function add (x, y) {
	return x +y
}

exports.add = add;

exports.str = 'hello';



//默认 var exports = module.exports;
//exports = add; 不管用(面对对象的问题)
//这样就只能导出单个
//module.exports = add;
//
//
//最后return 的是 module.exports