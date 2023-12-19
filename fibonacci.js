class FibonacciMagic {
    static generateFibonacci(n) {
        var fibonacciArray = [0, 1];

        for (var i = 2; i < n; i++) {
            var nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            fibonacciArray.push(nextFibonacci);
        }
        return fibonacciArray;
    }
        
}