let userInput = prompt("Enter a number:");


let number = parseInt(userInput);


if (!isNaN(number)) {

  console.log(`Multiplication table for ${number}:`);
  for (let i = 0; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}