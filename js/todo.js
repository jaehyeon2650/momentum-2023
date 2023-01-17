const formtodo = document.querySelector("#to-do");
const forminput = document.querySelector("#to-do input");
const todolist = document.querySelector("#to-do-list");
const todos = [];
function savelist(todo) {
    todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(todos));
}
function deletelist(event) {
    const li = event.target.parentElement;
    li.remove();
}
function writelist(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    span.innerText = todo;
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
    button.addEventListener("click", deletelist);
}

function formsubmit(event) {
    event.preventDefault();
    const todo = forminput.value;
    forminput.value = "";
    writelist(todo);
    savelist(todo);
}
formtodo.addEventListener("submit", formsubmit);


