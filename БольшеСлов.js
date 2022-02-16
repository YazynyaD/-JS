

function findLongestWord(str) {
    var longestWord = 0;
    for (let arr of str) {
            var strSplit = arr.split(/\s+/); 
            for(var i = 0; i < strSplit.length; i++){
                if(strSplit.length > longestWord){ 
                longestWord = strSplit.length; 
                 }
              }
        }
    return longestWord; 
  };
  

console.log(findLongestWord(["Hello world", "Otg df is a great solution", "How are you"]));


