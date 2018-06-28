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

// ** Add New Task Item
addTaskButton.addEventListener('click', (event) => {
  // Prevent broswer from refreshing when form is submitted
  event.preventDefault();
  const inputValue = addTaskInput.value;
  // Run Function that creates the LI item
  const li = createListItem(inputValue);
  // Clean input value in form after item is added
  addTaskInput.value = "";
  // Display li into #tasklist ul
  taskList.append(li);
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
