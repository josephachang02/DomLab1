const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompletion");

addTaskButton.addEventListener("click", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="completeButton">Completed</button>
  `;

  taskItem.querySelector(".completeButton").addEventListener("click", completeTask);

  taskList.appendChild(taskItem);
  newTaskInput.value = "";
}

function completeTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.remove();
}

function clearCompletedTasks() {
  const completedItems = taskList.querySelectorAll("li");
  completedItems.forEach((item) => {
    if (item.querySelector(".completeButton")) {
      item.remove();
    }
  });
}