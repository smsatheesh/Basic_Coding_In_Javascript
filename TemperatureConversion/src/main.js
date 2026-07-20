const { getUserInput: input, closeInput: close } = require("./readLine");

function convertTemperature(temperature, option) {
  let convertedTemperature;
  if (option === "1") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    console.log(
      `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`,
    );
  } else if (option === "2") {
    convertedTemperature = ((temperature - 32) * 5) / 9;
    console.log(
      `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`,
    );
  }
}

const main = async () => {
  console.log("Temperature Conversion Program? by SM Satheesh");
  const option = await input(`
      Select an option:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter your choice (1 or 2): "
    `);

  if (isNaN(option) || (option !== "1" && option !== "2")) {
    console.log("Invalid option. Please enter 1 or 2.");
    close();
    return;
  }

  const temperatureInput = await input(`Enter the temperature to convert: `);
  close();

  const temperature = parseFloat(temperatureInput);
  if (isNaN(temperature)) {
    console.log("Invalid temperature. Please enter a valid number.");
    return;
  }

  const convertedTemperature = convertTemperature(temperature, option);
};

main();
