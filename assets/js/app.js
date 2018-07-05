// **  TO DO LIST - built on native JS **
// by Marco Gregorin


// **** DEFINE GLOBAL VARIABLES **** //
const addTaskForm = document.querySelector('#addTaskForm');
const addTaskButton = document.querySelector('#addTaskButton');
const addTaskInput = document.querySelector('#addTaskInput');
const taskList = document.querySelector('#tasksList');
const alertMessage = document.createElement('span');


// **** FUNCTION THAT CREATES LI **** //
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


// **** FRONT-END VALIDATION **** //
function validateInput() {
  const messageIsPresent = addTaskForm.querySelector('.alertMessage');
  if (!messageIsPresent) {
    alertMessage.className = 'alertMessage';
    addTaskInput.classList.add('inputError');
    alertMessage.textContent = 'Please insert some value';
    addTaskForm.appendChild(alertMessage);
  }
}


// **** ADD NEW TASK ITEM **** //
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

// **** REMOVE TASK WHEN IS COMPLETED  **** //
taskList.addEventListener('click', (event) => {
  let clickedItem = event.target;
  if (clickedItem.tagName == 'IMG' & clickedItem.classList.contains("task-icon")) {
    let li = clickedItem.parentElement;
    let ul = li.parentElement;
    ul.removeChild(li);
  }
});


// **** EDIT TASK **** //
// taskList.addEventListener('click', (event) => {
//   let clickedTask = event.target;
//   let clickedTaskContent = clickedTask.textContent;
//   let clickedTaskLi = clickedTask.parentElement;
//   let InputEdit = document.createElement('input');
//   InputEdit.type = 'text';
//   InputEdit.className = 'edit-task';
//   let clickedTaskSpan = event.target;
//   if(clickedTask.tagName == 'SPAN') {
//     // Add text input as value
//     InputEdit.setAttribute('value', clickedTaskContent);
//     // Add input to the DOM
//     clickedTaskLi.appendChild(InputEdit);
//     // Remove text
//     clickedTaskLi.removeChild(clickedTaskSpan);
//     console.log('Editing value');
//   }
//   InputEdit.addEventListener('submit', () => {
//     console.log('salvato');
//   });
// });
