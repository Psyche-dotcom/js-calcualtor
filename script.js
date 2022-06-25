let num1 = parseFloat(prompt("Please enter your first digit"));
const operation = prompt(
  "please enter your arithmetic operation ( +, -, / or *)"
);
let num2 = parseFloat(prompt("Please enter your second digit"));

let result;

switch (operation) {
  case "+":
    result = num1 + num2;
    alert(`Your result is ${result}`);
    break;
  case "-":
    result = num1 - num2;
    alert(`Your result is ${result}`);
    break;
  case "/":
    result = num1 / num2;
    alert(`Your result is ${result}`);
    break;
  case "*":
    result = num1 * num2;
    alert(`Your result is ${result}`);
    break;
  default:
    alert(
      "Operation not available please restart and i35nput the available operation "
    );
    break;
}
