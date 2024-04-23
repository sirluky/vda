// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click', addTodo)

class Todos {

    constructor(name) {
        this.todo = [{ text: "text", done: false }]
    }

    createTodo(text) {
        console.log("createTodo")
        const todoobj = { text: text, done: false };
        this.todo.push(todoobj);

        const data = this.dumpTodo();
        console.log(data)
    }

    removeTodo(index) {
        console.log(index)
        this.todo.splice(index, 1);
        const data = this.dumpTodo();
        console.log(data)
    }

    changeState(index) {
        this.todo[index].done = !this.todo[index].done;
        console.log(index)

        const data = this.dumpTodo();
        console.log(data)
    }

    dumpTodo() {
        let data = "";
        for (let objIndex in this.todo) {
            const obj = this.todo[objIndex];

            data = data + "index: " + objIndex + " text:" + obj.text + ", stav:" + obj.done + "<br/>";
            data += `<button onclick="todosInstance.removeTodo(${objIndex})">x</button>`;
            data += "<button onclick=\"todosInstance.changeState(" + objIndex + ")\">done</button>"
            data += "<br/>"
        }

        document.getElementById('toDoContainer').innerHTML = data;

        return data;
    }

}

const todosInstance = new Todos("nazev")

todosInstance.createTodo("novapoznamka")

const data = todosInstance.dumpTodo();
console.log(data)