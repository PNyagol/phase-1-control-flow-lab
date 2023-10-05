function scuberGreetingForFeet(distance) {
  let result;
  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance >= 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(generous) {
  switch (generous) {
    case "generous":
      return "Thank you so much."
      // console.log("Thank you so much.");
      break;
    case "not as generous":
      return "Thank you."
      // console.log("Thank you.");
      break;

    default:
      return "Bye."
      // console.log("Bye.");
  }
}


