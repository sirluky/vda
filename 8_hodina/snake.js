var snake;

function startGame() {
    myGameArea.start();
    snake = new snake(30, 30, "black", 100, 100);
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 1000);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function snake(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.up = function () {
        this.y -= 30;
    }
    this.down = function () {
        this.y += 30;
    }
    this.left = function () {
        this.x -= 30;
    }
    this.right = function () {
        this.x += 30;
    }
}

function updateGameArea() {
    myGameArea.clear();
    if (myGameArea.key && myGameArea.key == 37) {
        snake.left();
    }
    if (myGameArea.key && myGameArea.key == 39) {
        snake.right();
    }
    if (myGameArea.key && myGameArea.key == 38) {
        snake.up();
    }
    if (myGameArea.key && myGameArea.key == 40) {
        snake.down();
    }
    snake.update();
}