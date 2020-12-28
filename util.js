const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.checkAndGenerate = (name, age) => {
  if (
    !this.validateInput(name, true, false) ||
    !this.validateInput(age, false, true)
  ) {
    return false;
  }
  return this.generateText(name, age);
};

exports.generateText = generateText;
exports.validateInput = validateInput;
