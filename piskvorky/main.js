console.log('init')

const size = 10;
let playground = [];
let player = 1; // 1, 2

pole[0][0] === 'x' && pole[0][1] === 'x'

// x, 0, 0
// 0, x, 0
// 0, 0, 0

function isEnd() {

    setMessage('KONEC');
}

function init() {

    for (x = 0; x < size; x++) {
        playground[x] = [];
        for (y = 0; y < size; y++) {
            playground[x].push("_");
        }
    }
}
function dumpPalayground() {
    let buttons = "";
    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            buttons += "<button onclick='turn(" + x + ", " + y + ")'>" + playground[x][y] + "</button>"
        }
        buttons += "<br/>"
    }
    setMessage()

    document.getElementsByClassName("playground")[0].innerHTML = buttons;
}

function turn(x, y) {
    console.log(x, y)
    playground[x][y] = "x"
    dumpPalayground()
}

function setMessage(text) {
    let newText = "Hrac " + player + " je na tahu." + text;
    document.getElementsByClassName("textPanel")[0].innerHTML = newText;
}

init();
dumpPalayground();
setMessage('test textu');
