const correctPassword = "secret";
let attempts = 0;

while (attempts < 3) {
  let userPassword = prompt("Enter the password:");

  if (userPassword === correctPassword) {
    attempts++;
    console.log(`You entered the correct password after ${attempts} attempt(s)`);
    break;
  } else {
    attempts++;
    if (attempts < 3) {
      console.log("Incorrect password. Please try again.");
    } else {
      console.log(`Your account is locked! You failed to enter the correct password ${attempts} times`);
    }
  }
}