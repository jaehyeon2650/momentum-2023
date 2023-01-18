const formtodo = document.querySelector("#to-do");
const forminput = document.querySelector("#to-do input");
const todolist = document.querySelector("#to-do-list");
const usernamesaved = localStorage.getItem("username");

let todos = [];
function savelist(todo) {
    todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(todos));
}
function deletelist(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(list => list.id !== parseInt(li.id));

    localStorage.setItem("todo", JSON.stringify(todos));
}
function writelist(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    span.innerText = todo.list;
    li.appendChild(button);
    li.appendChild(span);
    todolist.appendChild(li);
    button.addEventListener("click", deletelist);
}

function formsubmit(event) {
    event.preventDefault();
    const todo = {
        list: forminput.value,
        id: Date.now(),
    }
    forminput.value = "";
    writelist(todo);
    savelist(todo);
}

formtodo.addEventListener("submit", formsubmit);
const savedlist = JSON.parse(localStorage.getItem("todo"));

if (savedlist !== null) {
    todos = savedlist;
    // savedlist.forEach((item) => console.log("hi", item));
    savedlist.forEach(writelist);
}


