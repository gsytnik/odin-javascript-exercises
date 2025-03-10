const fibonacci = function(entry) {
    entry = parseInt(entry);

    let fib_store = [1, 1, 2, 3];

    for (i = 3; i < entry - 1; i++) {
        fib_store.push(fib_store[i] + fib_store[i - 1])
    }

    return entry < 0 ? "OOPS" : (entry === 0 ? 0 : fib_store[entry - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
