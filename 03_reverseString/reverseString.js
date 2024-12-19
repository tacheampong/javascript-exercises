const reverseString = function(words) {

    let newWords = words.split("");
    let reverseWord = '';
    if(words === ''){
        return reverseWord;
    }
    for(let i = newWords.length - 1; i >= 0; i--){
        reverseWord = reverseWord + newWords[i];
    }
    return reverseWord
};

// Do not edit below this line
module.exports = reverseString;
