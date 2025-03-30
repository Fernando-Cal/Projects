const addTaskBtn = document.getElementById("addTask");
const deleteTaskBtn = document.getElementById("deleteTask");
const submitTaskBtn = document.getElementById("submitTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener('click', () => {
  taskInput.style.display = "block";
  submitTaskBtn.style.display = "block";
});

let idCounter = 0; // counter for unique ids
submitTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value; // gets the task from the input field
  const newTask = document.createElement('li'); // creates a new list item
  let uniqueId = `item-${idCounter++}`; // creates a unique id for the task 
  newTask.id = uniqueId;
  newTask.textContent = taskText;
  taskList.appendChild(newTask); 
  taskInput.value = null; // clears the input field
})

