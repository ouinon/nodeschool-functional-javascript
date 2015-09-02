function getShortMessages(messages) {
	// SOLUTION GOES HERE
	return messages.filter(function(current){
		return current.message.length < 50;
	}).map(function(current){
		return current.message;
	});
	
}

module.exports = getShortMessages;