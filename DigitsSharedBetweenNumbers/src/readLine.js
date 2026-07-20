const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user and returns the entered value.
 * @param {string} query
 * @returns {Promise<string>}
 */
const getUserInput = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer.trim());
    });
  });
};

/**
 * Prompts the user and returns an array of values.
 * Example input: "10 20 30"
 * Returns: ["10", "20", "30"]
 */
const getMultipleInputs = async (query, delimiter = /\s+/) => {
  const input = await getUserInput(query);
  return input.split(delimiter);
};

/**
 * Closes the readline interface.
 */
const closeInput = () => {
  rl.close();
};

module.exports = {
  getUserInput,
  getMultipleInputs,
  closeInput,
};
