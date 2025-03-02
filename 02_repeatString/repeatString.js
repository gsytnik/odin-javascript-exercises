const repeatString = function(inp, numTimes) {
    if (numTimes < 0) {
        return "ERROR"
    }
    let retStr = '';
    for (i = 0; i < numTimes; i++){
        retStr += inp
    };

    return retStr;
};

// Do not edit below this line
module.exports = repeatString;
