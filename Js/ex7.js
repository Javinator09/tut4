let hoursInput = prompt("Enter the hours:");
let minutesInput = prompt("Enter the minutes:");
let secondsInput = prompt("Enter the seconds:");

let hours = parseInt(hoursInput);
let minutes = parseInt(minutesInput);
let seconds = parseInt(secondsInput);

if (Number.isInteger(hours) && Number.isInteger(minutes) && Number.isInteger(seconds) &&
  hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {

  console.log(`Time input: ${hours}h${minutes}m${seconds}s`);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;

      if (hours === 24) {
        hours = 0;
      }
    }
  }


  console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
} else {
  console.log("Invalid input. Please enter valid values for hours, minutes, and seconds.");
}