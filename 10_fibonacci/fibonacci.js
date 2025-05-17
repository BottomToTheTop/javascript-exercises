const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    
    fib = [0, 1]
    for (let i = 2; i <= num; i++) {
        x = fib[i - 1] + fib[i - 2]
        fib.push(x)
    }
    return fib[num];
}
// Do not edit below this line
module.exports = fibonacci;
