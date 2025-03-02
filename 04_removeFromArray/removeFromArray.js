const removeFromArray = function(inputArray, ...toRemove) {
    
    for (item of toRemove){

        let position = inputArray.indexOf(item);
        while (position !== -1) {
            inputArray.splice(position, 1);
            position = inputArray.indexOf(item);
        }
        
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
