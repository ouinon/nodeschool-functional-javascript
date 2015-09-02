module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(pre,cur){
  	pre.push(fn(cur));
  	return pre;
  },[])
}

// OFFICIAL SOLUTION - IT'S A BIG IMPROVEMENT ON MY OWN WHICH PROBABLY SHOULDN'T HAVE VALIDIDATED IN FAIRNESS
//   module.exports = function map(arr, fn, thisArg) {
//   return arr.reduce(function(acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }