function doubleAllMap(numbers) {
	var result = [];
	return numbers.map(function(current,index,array){
		return current*2;
	});
}

module.exports = doubleAllMap