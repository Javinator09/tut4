function calculateFollowingDay(day) {
  let followingDay;

  switch (day) {
    case 'sun':
      followingDay = 'mon';
      break;
    case 'mon':
      followingDay = 'tue';
      break;
    case 'tue':
      followingDay = 'wed';
      break;
    case 'wed':
      followingDay = 'thu';
      break;
    case 'thu':
      followingDay = 'fri';
      break;
    case 'fri':
      followingDay = 'sat';
      break;
    case 'sat':
      followingDay = 'sun';
      break;
    default:
      console.log("Invalid input. Please enter a valid three-letter abbreviation for a day of the week (e.g., sun, mon, tue, wed, thu, fri, sat).");
      return;
  }

  console.log(`You entered: ${day}`);
  console.log(`The following day is: ${followingDay}`);
}

let userDayInput = prompt("Enter a day of the week (three-letter abbreviation in lower case):");


let userDay = userDayInput.toLowerCase();


calculateFollowingDay(userDay);