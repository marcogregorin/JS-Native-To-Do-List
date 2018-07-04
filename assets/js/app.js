// **  TO DO LIST - built on native JS **
// by Marco Gregorin

// ** Define global variables
const addTaskForm = document.querySelector('#addTaskForm');
const addTaskButton = document.querySelector('#addTaskButton');
const addTaskInput = document.querySelector('#addTaskInput');
const taskList = document.querySelector('#tasksList');
const taskListItem = document.querySelector('#taskList li');
const alertMessage = document.createElement('span');


// ** Function that creates LI item
function createListItem(inputValue) {
  // Create li item
  const newlistItem = document.createElement('li');
  const taskText = document.createElement('span');
  // Get input value and add it to the li
  taskText.innerHTML = inputValue;
  // Create a complete task icon
  let newListCompleteIcon = document.createElement('img');
  newListCompleteIcon.src = "assets/img/checked.svg";
  newListCompleteIcon.className = 'task-icon';
  // Add checkbox to the li
  newlistItem.prepend(taskText);
  newlistItem.prepend(newListCompleteIcon);
  // Return list item to the handler
  return newlistItem;
}

// ** Front-End Validation
function validateInput() {
  const messageIsPresent = addTaskForm.querySelector('.alertMessage');
  if (!messageIsPresent) {
    alertMessage.className = 'alertMessage';
    addTaskInput.classList.add('inputError');
    alertMessage.textContent = 'Please insert some value';
    addTaskForm.appendChild(alertMessage);
  }

}

// ** Add New Task Item
addTaskButton.addEventListener('click', (event) => {
  // Prevent broswer from refreshing when form is submitted
  event.preventDefault();
  // Remove validation label if is messgae is present
  if (addTaskForm.appendChild(alertMessage)) {
    addTaskForm.removeChild(alertMessage);
    addTaskInput.classList.remove('inputError');
  };
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

// ** Remove Task when is completed
taskList.addEventListener('click', (event) => {
  let clickedItem = event.target;
  if (clickedItem.tagName == 'IMG' & clickedItem.classList.contains("task-icon")) {
    let li = clickedItem.parentElement;
    let ul = li.parentElement;
    ul.removeChild(li);
  }
});
