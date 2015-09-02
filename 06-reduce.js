function countWords(inputWords) {
  return result = inputWords
  	.reduce(function(prev,cur,ind,arr){
  		prev[cur] ? prev[cur]++ : prev[cur] = 1;
  		return prev;
  	},{});

  	

}

module.exports = countWords