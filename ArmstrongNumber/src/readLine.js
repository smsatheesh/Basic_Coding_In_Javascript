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
