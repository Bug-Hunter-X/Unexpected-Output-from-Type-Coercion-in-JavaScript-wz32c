function foo(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both inputs must be numbers";
  }
  return a + b;
}
console.log(foo(1, "1")); // Output: Invalid input: Both inputs must be numbers
console.log(foo(1, 1)); // Output: 2