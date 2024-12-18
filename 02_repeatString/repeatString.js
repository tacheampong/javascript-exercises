const repeatString = function(word, freq) {

    let newWord = '';
    if(freq < 0){
        newWord = 'ERROR';
        return newWord;
    } 
    for(let i = 1; i <= freq; i++){
     if(freq === 0 || word === ''){
        return newWord;
        }
        newWord = newWord + word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
