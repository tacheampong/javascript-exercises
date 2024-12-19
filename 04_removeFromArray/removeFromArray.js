const removeFromArray = function(array, ...arg) {

    let newArray = [];
    let isArg = false;
    for(let i = 0; i < array.length; i++){
        isArg = false;
        for(let j = 0; j < arg.length; j++){
            if(array[i] === arg[j]){
                isArg = true;
                continue;
            }

        }
        if(isArg){
            continue;
        }
        newArray.push(array[i]);      
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
