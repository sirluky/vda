var snake;
var myGameArea;
function startGame() {
    myGameArea = new MyGameArea();
    myGameArea.start();
    addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    });
    snake = new Snake(30, 30, "black", 100, 100);
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
    snake.update(myGameArea.context);
}
var MyGameArea = /** @class */ (function () {
    function MyGameArea() {
        this.canvas = document.createElement("canvas");
        this.context = null;
        this.key = null;
    }
    MyGameArea.prototype.start = function () {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 1000);
    };
    MyGameArea.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return MyGameArea;
}());
var Snake = /** @class */ (function () {
    function Snake(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    Snake.prototype.update = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Snake.prototype.up = function () {
        this.y -= 30;
    };
    Snake.prototype.down = function () {
        this.y += 30;
    };
    Snake.prototype.left = function () {
        this.x -= 30;
    };
    Snake.prototype.right = function () {
        this.x += 30;
    };
    return Snake;
}());
//# sourceMappingURL=index.js.map