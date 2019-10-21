interface myTodo {
  text?: string,
  splneno?: boolean,
  upravit?: boolean
}
let todos: myTodo[] = [];

todos.push({text: "ahoj", splneno: true, upravit: false})

function vypis() {
  console.log(todos);
  let seznamHodnoty = "<table>";
  for (let i = 0; i < todos.length; i++) {
    seznamHodnoty += "<tr>" + vytvorPolozku(i) + "</tr>" ;
  }
  seznamHodnoty += "</table>";
  document.getElementById("seznam").innerHTML = seznamHodnoty;
}

function pridat() {
  let element: HTMLInputElement = document.getElementById("textInput") as HTMLInputElement;
  if (element.value !== "") {
    const noveTodo = {
      text: element.value,
      splneno: false,
      upravit: false
    };
    todos.push(noveTodo);
    element.value = "";
    vypis();

    vypisTodo(noveTodo);
  }
}

// fce ktera vypisuje todo
function vypisTodo(item: myTodo): myTodo {
  console.log(item);
  return item;
}

function odebrat(i: number) {
  todos.splice(i, 1);
  vypis();
}

function upravit(i: number) {
  if (todos[i].upravit) {
    todos[i].text = document.getElementById("textUpravit").value;
  }

  todos[i].upravit = !todos[i].upravit;
  vypis();
}

function splneno(index: number) {
  todos[index].splneno = !todos[index].splneno;
  vypis();
}

function vytvorPolozku(i: number): string {
  let polozka = "<td><li>";

  if (todos[i].upravit) {
    polozka += `<input type=text value="${todos[i].text}" id="textUpravit">`;
  }
  else if (!todos[i].splneno) {
    polozka += todos[i].text
  }
  else {
    polozka += "<strike>" + todos[i].text + "</strike>"
  }
  polozka += `</td><td>`;
  polozka += ` <button type=button onClick=upravit(` + i + `) class="btn btn-secondary">Upravit</span>`
  polozka += ` <button type=button onClick=odebrat(` + i + `) class="btn btn-danger">Smazat</span>`
  polozka += ` <button type=button onClick=splneno(` + i + `) class="btn btn-success">Splneno</span>`
  polozka += `</li></td>`;

  return polozka;
}