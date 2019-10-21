var todos = [];
todos.push({ text: "ahoj", splneno: true, upravit: false });
function vypis() {
    console.log(todos);
    var seznamHodnoty = "<table>";
    for (var i = 0; i < todos.length; i++) {
        seznamHodnoty += "<tr>" + vytvorPolozku(i) + "</tr>";
    }
    seznamHodnoty += "</table>";
    document.getElementById("seznam").innerHTML = seznamHodnoty;
}
function pridat() {
    var element = document.getElementById("textInput"), as = HTMLInputElement;
    if (element.value !== "") {
        var noveTodo = {
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
function vypisTodo(item) {
    console.log(item);
    return item;
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
function splneno(index) {
    todos[index].splneno = !todos[index].splneno;
    vypis();
}
function vytvorPolozku(i) {
    var polozka = "<td><li>";
    if (todos[i].upravit) {
        polozka += "<input type=text value=\"" + todos[i].text + "\" id=\"textUpravit\">";
    }
    else if (!todos[i].splneno) {
        polozka += todos[i].text;
    }
    else {
        polozka += "<strike>" + todos[i].text + "</strike>";
    }
    polozka += "</td><td>";
    polozka += " <button type=button onClick=upravit(" + i + ") class=\"btn btn-secondary\">Upravit</span>";
    polozka += " <button type=button onClick=odebrat(" + i + ") class=\"btn btn-danger\">Smazat</span>";
    polozka += " <button type=button onClick=splneno(" + i + ") class=\"btn btn-success\">Splneno</span>";
    polozka += "</li></td>";
    return polozka;
}
