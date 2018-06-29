// **  TO DO LIST - built on native JS **
// by Marco Gregorin

// ** Define global variables
const addTaskForm = document.querySelector('#addTaskForm');
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

// ** Front-End Validation
function validateInput() {
  const messageIsPresent = addTaskForm.querySelector('.alertMessage');
  const alertMessage = document.createElement('span');
  if (!messageIsPresent) {
    alertMessage.className = 'alertMessage';
    addTaskInput.classList.add('inputError');
    alertMessage.textContent = 'Please insert some value';
    addTaskForm.appendChild(alertMessage);
  }

//   // Remove alert after few seconds
//   setTimeout(function removeAlert() {
//     addTaskForm.removeChild(alertMessage);
//     addTaskInput.classList.remove('inputError')
//   }, 5000);
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
