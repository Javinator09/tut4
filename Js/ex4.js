let num1Input = prompt("Enter the first integer number:");
let num2Input = prompt("Enter the second integer number:");

let num1 = parseInt(num1Input);
let num2 = parseInt(num2Input);


if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
  console.log("Invalid input. Please enter two valid integer numbers.");
} else {

  let sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);


  let difference = num1 - num2;
  console.log(`${num1} - ${num2} = ${difference}`);

  
  let product = num1 * num2;
  console.log(`${num1} * ${num2} = ${product}`);


  if (num2 !== 0) {
    let quotient = num1 / num2;
    console.log(`${num1} / ${num2} = ${quotient}`);
  } else {
    console.log("Cannot divide by zero.");
  }


  if (num2 !== 0) {
    let remainder = num1 % num2;
    console.log(`${num1} % ${num2} = ${remainder}`);
  } else {
    console.log("Cannot calculate modulo with zero divisor.");
  }
}