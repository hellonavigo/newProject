// Array of message components
const subjects = ['John', 'Alice', 'Bob', 'Jane'];
const verbs = ['likes', 'hates', 'loves', 'dislikes'];
const objects = ['apples', 'bananas', 'oranges', 'grapes'];

// Generate a random index based on array length
function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// Generate a random message
function generateMessage() {
  const subject = subjects[getRandomIndex(subjects.length)];
  const verb = verbs[getRandomIndex(verbs.length)];
  const object = objects[getRandomIndex(objects.length)];
  return `${subject} ${verb} ${object}.`;
}

// Display a random message on the webpage
function displayMessage() {
  const message = generateMessage();
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

// Button click event listener
const button = document.getElementById('generate-btn');
button.addEventListener('click', displayMessage);
