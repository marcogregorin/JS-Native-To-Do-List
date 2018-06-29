// **  TO DO LIST - built on native JS **
// by Marco Gregorin

// ** Define global variables
const addTaskButton = document.querySelector('#addTaskButton');
const addTaskInput = document.querySelector('#addTaskInput');
const taskList = document.querySelector('#tasksList');
const taskListItem = document.querySelector('#taskList li');


// ** Function that creates LI item
function createListItem(inputValue) {
  // Create li item
  let newlistItem = document.createElement('li');
  // Get input value and add it to the li
  newlistItem.innerHTML = inputValue;
  // Create a complete task icon
  let newListCompleteIcon = document.createElement('img');
  newListCompleteIcon.src = "assets/img/checked.svg";
  newListCompleteIcon.className = 'task-icon';
  // Add checkbox to the li
  newlistItem.prepend(newListCompleteIcon);
  // Return list item to the handler
  return newlistItem;
}

// Validation
function validateInput() {
  // Create alert bar
  const alertBar = document.createElement('div');
  alertBar.className = 'alertBar'
  alertBar.innerHTML = '<h5>Please insert some value</h5>';
  document.body.appendChild(alertBar);

  // Remove alert after few seconds
  setTimeout(function removeAlert() {
    document.body.removeChild(alertBar)
  }, 3000);
}

// ** Add New Task Item
addTaskButton.addEventListener('click', (event) => {
  // Prevent broswer from refreshing when form is submitted
  event.preventDefault();
  const inputValue = addTaskInput.value;
  // Run Function that creates the LI item
  if (inputValue === '') {
    validateInput();
  } else {
    const li = createListItem(inputValue);
    // Display li into #tasklist ul
    taskList.append(li);
  }
  // Clean input value in form after item is added
  addTaskInput.value = "";


});

// ** Remove LI item when task is completed
document.addEventListener('click', (event) => {
  let clickedItem = event.target;
  if (clickedItem.tagName == 'IMG' & clickedItem.classList.contains("task-icon")) {
    let li = clickedItem.parentElement;
    let ul = li.parentElement;
    ul.removeChild(li);
  }
});
