function repeat(operation,num) {
	if(!num){
		return operation();
	}
	operation();
	repeat(operation, --num);
}

// Do not remove the line below
module.exports = repeat;