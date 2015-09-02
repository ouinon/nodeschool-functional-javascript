function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
	    return submittedUsers.every(function(userOri,ind,arr){
	    	return goodUsers.some(function(userSub){
	    		return userOri.id === userSub.id;
	    	});
	    });
	};
}
module.exports = checkUsersValid