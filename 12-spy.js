function Spy(target, method) {
	
	// Had to look at the solution on this one
	// Still don't quite understand why 'spy' has to be a separate object

	var spy = {count: 0};
	var originalmethod = target[method];

	spy.count = 0;
	target[method] = function(){
		spy.count++;
		return originalmethod.apply(this,arguments);
	};
	// 	target.count++;
	// 	target[method](arguments);
	// }
	console.log(spy);
	return spy;
}

module.exports = Spy