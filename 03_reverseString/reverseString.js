const reverseString = function(inputString) {

    let retString = '';
    for (i = inputString.length - 1; i >= 0; i--){
        retString += inputString[i];
    }

    return retString;
};

// Do not edit below this line
module.exports = reverseString;
