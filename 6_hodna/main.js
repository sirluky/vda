let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', addTodo)

let todos = []

function addTodo() {
    todos.push({ text: inputField.value, done: false })
    renderTodos()
}

function renderTodos() {
    toDoContainer.innerHTML = ""
    for (let i = 0; i < todos.length; i++) {
        renderTodo(i, todos[i])
    }
}

function renderTodo(i, todo) {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = todo.text;
    toDoContainer.appendChild(paragraph);
    if (todo.done) {
        paragraph.style.textDecoration = "line-through";
    }

    paragraph.addEventListener('click', () => doneTodo(i))
    paragraph.addEventListener('dblclick', () => deleteTodo(i))
}

function deleteTodo(i) {
    todos.splice(i, 1);
    renderTodos()
}
function doneTodo(i) {
    todos[i].done = true;
    renderTodos()
}