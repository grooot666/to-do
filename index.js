const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const task = todoInput.value.trim();
  if (task) {
    greatTaskElement(task);
    todoInput.value = [];
    saveTask();
  } else {
    alert("Please enter a task.");
  }
}

addButton.addEventListener("click", addTask);

function greatTaskElement(task) {
  const listElement = document.createElement("li");
  listElement.textContent = task;
  taskList.appendChild(listElement);
}
function saveTask() {
  let data = [];
  taskList.querySelectorAll("li").forEach(function (item) {
    data.push(item.textContent.trim());
  });
  localStorage.setItem("datas", JSON.stringify(data));
}

function loadTask() {
  const data = JSON.parse(localStorage.getItem("datas")) || [];
  data.forEach(greatTaskElement);
}
window.onload = function () {
  alert("Welcome to the Todo List App!");
  loadTask();
};
