let todos = [];//[{ text: "", splneno: false, upravit: false }]

function vypis() {
  console.log(todos)
  let seznamHodnoty = "<table>";
  for (let i = 0; i < todos.length; i++) {
    seznamHodnoty += "<tr>" + vytvorPolozku(i) + "</tr>" ;
  }
  seznamHodnoty += "</table>";
  document.getElementById("seznam").innerHTML = seznamHodnoty;
}

function pridat() {
  if (document.getElementById("textInput").value !== "") {
    const noveTodo = {
      text: document.getElementById("textInput").value,
      splneno: false
    };
    todos.push(noveTodo);
    document.getElementById("textInput").value = "";
    vypis();
  }
}

function odebrat(i) {
  todos.splice(i, 1);
  vypis();
}

function upravit(i) {
  if (todos[i].upravit) {
    todos[i].text = document.getElementById("textUpravit").value;
  }

  todos[i].upravit = !todos[i].upravit;
  vypis();
}

function splneno(i) {
  todos[i].splneno = !todos[i].splneno;
  vypis();
}

function vytvorPolozku(i) {
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