const palindromes = function (inputString) {
    inputString = inputString.replace(/[\.\,\!\? ]/g, '');
    // console.log(inputString);

    for (i = 0; i <= inputString.length / 2; i++) {
        if (inputString.charAt(i).toLowerCase() 
                != inputString.charAt(inputString.length - i - 1).toLowerCase()) {
            return false;
        }    
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
