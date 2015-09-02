function duckCount() {
  // SOLUTION GOES HERE
  var count = 0;
  // console.log(Array.prototype.slice.call(arguments));
  return Array.prototype.slice.call(arguments).reduce(function(pre,cur,ind,arr){
  	Object.prototype.hasOwnProperty.call(cur,'quack') && ++count;
  	return count;
  },0);

}

module.exports = duckCount