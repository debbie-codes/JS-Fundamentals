function add(a, b) {
  return a + b;
}

const arg1 = prompt("Enter the first number:");
const arg2 = prompt("Enter the second number:");

const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Both arguments must be integers");
} else {
  console.log(add(num1, num2));
}
