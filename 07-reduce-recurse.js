function reduce(arr, fn, initial) {
	var recurse = function(val,ind){
		return ind >= arr.length ? val : recurse(fn(val,arr[ind],ind),++ind);
	}
	return recurse(initial,0);
}
module.exports = reduce;