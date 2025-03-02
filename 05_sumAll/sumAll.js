const sumAll = function(startInt, stopInt) {

    if (!Number.isInteger(startInt) || startInt < 0 || 
        !Number.isInteger(stopInt) || stopInt < 0) {
        return 'ERROR';
    }

    [startInt, stopInt] = startInt > stopInt ? [stopInt, startInt] : [startInt, stopInt]

    let arraySum = 0;
    for (i = startInt; i <= stopInt; i++){
        arraySum += i
    }

    return arraySum;
};

// Do not edit below this line
module.exports = sumAll;
