class App {
  static summonFibonacciMagic() {
    var fibonacciSequence = FibonacciMagic.generateFibonacci(10);
    alert("Summoned Fibonacci Magic: " + fibonacciSequence.join(", "));
  }
}

// Attach the click event to the button
document.getElementById("summonButton").addEventListener("click", App.summonFibonacciMagic);

