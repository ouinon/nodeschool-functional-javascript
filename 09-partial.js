var slice = Array.prototype.slice

function logger(namespace) {

	return function(){
		var args = slice.call(arguments);
		args.unshift(namespace);
		console.log.apply(console,args);
	}
  // SOLUTION GOES HERE
}

module.exports = logger

// Official solution 
// function logger(namespace) {
// 	return function() {
// 	  console.log.apply(console, [namespace].concat(slice.call(arguments)))
// 	}
// }