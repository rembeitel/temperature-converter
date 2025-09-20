function getTemperature() {
  const temp = prompt("Please provide a temperature in Farenheit");

  if (
    temp === null ||
    typeof Number(temp) !== "number" ||
    !Number.isFinite(Number(temp))
  ) {
    alert("sorry you must enter a valid temperature!");
  }

  const convertToCelsius = (temp - 32) * (5 / 9);
  alert(`The temperature in celsius is ${convertToCelsius}`);

  if (convertToCelsius < 0) {
    alert("That is very cold!");
  } else if (convertToCelsius < 20) {
    alert("That is cold!");
  } else if (convertToCelsius < 30) {
    alert("That is warm!");
  } else if (convertToCelsius < 40) {
    alert("That is hot!");
  } else if (convertToCelsius >= 40) {
    alert("That is very hot!");
  } else {
    alert("Is that even possible?");
  }
}

getTemperature();
