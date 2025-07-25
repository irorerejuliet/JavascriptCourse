// Step 1: Ask the user for the day
const day = prompt("What day of the week is it?").toLowerCase();

// Step 2: Respond with a message using switch
switch (day) {
  case "monday":
    console.log("Monday is a great day to start fresh!");
    break;
  case "tuesday":
    console.log("Tuesday — keep the momentum going!");
    break;
  case "wednesday":
    console.log("It's Wednesday, halfway through the week!");
    break;
  case "thursday":
    console.log("Thursday — almost there!");
    break;
  case "friday":
    console.log("Friday — you made it!");
    break;
  case "saturday":
    console.log("Saturday — time to relax or catch up on hobbies.");
    break;
  case "sunday":
    console.log("Sunday — rest, recharge, and get ready for a new week.");
    break;
  default:
    console.log("That's not a valid day of the week. Try again.");
}
