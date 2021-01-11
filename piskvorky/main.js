console.log('init')

const size = 10;
const endSize = 3;
let playground = [];
let player = 1; // 1, 2

// x, 0, 0
// 0, x, 0
// 0, 0, 0


function playAI() {
    let { x, y } = generateAI();

    if (playground[x][y] === "_") {

    }

    play(x, y);
    player = 1;
}

function generateAI() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    if (playground[x][y] === "_") {
        return { x, y }
    } else {
        return generateAI();
    }
}

function isEnd() {
    let isEnding = false;


    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            if (check(x, y, "x")) {
                isEnding = true
            }

            if (check(x, y, "o")) {
                isEnding = true
            }
        }
    }

    if (isEnding) {
        setMessage('KONEC');
    }
}

function check(x, y, char) {
    return checkHorizontal(x, y, char) || checkVertical(x, y, char) || checkDiagonal(x, y, char)
}

function checkHorizontal(x, y, char, level = 0) {
    if (level === endSize) {
        return true;
    }

    if (playground[x][y] === char) {
        return checkHorizontal(x + 1, y, char, level + 1);

    }
    return false;
}

function checkVertical(x, y, char, level = 0) {
    if (level === endSize) {
        return true;
    }
    if (playground[x][y] === char) {
        return checkVertical(x, y + 1, char, level + 1)
    }
    return false;
}

function checkDiagonal(x, y, char, level = 0) {
    if (level === endSize) {
        return true;
    }
    if (playground[x][y] === char) {
        return checkDiagonal(x + 1, y + 1, char, level + 1)
    }
    return false;
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
    isEnd()

    document.getElementsByClassName("playground")[0].innerHTML = buttons;
}

function play(x, y) {
    playground[x][y] = (player === 1 ? "x" : "o");
    player = (player === 1 ? 2 : 1);
}

function turn(x, y) {
    play(x, y);


    playAI();

    dumpPalayground()
}

function setMessage(text = null) {
    let newText = (text ? text : "Hrac " + player + " je na tahu.");
    document.getElementsByClassName("textPanel")[0].innerHTML = newText;
}

init();
dumpPalayground();
