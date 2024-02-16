function calculateGradeStanding(name, unitsCompleted) {
  if (Number.isInteger(unitsCompleted) && unitsCompleted >= 0) {
      let gradeStanding = 
          unitsCompleted <= 30 ? "Freshman" :
          unitsCompleted <= 60 ? "Sophomore" :
          unitsCompleted <= 90 ? "Junior" : "Senior";

      console.log(`Hello ${name}`);
      console.log(`Your grade standing is ${gradeStanding}`);
  } else {
      console.log("Invalid input. Please enter a valid positive integer for units completed.");
  }
}

let userName = prompt("Enter your name:");
let unitsCompletedInput = prompt("Enter the number of units completed at college:");
let unitsCompleted = parseInt(unitsCompletedInput);

calculateGradeStanding(userName, unitsCompleted);