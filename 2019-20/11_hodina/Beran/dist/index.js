var hraci_x; // nastavení velikosti hracího pole na x
var hraci_y; // nastavení velikosti hracího pole na y
var rozliseni = 20; // nastavení velikosti jednoho čtverečku
var snake;
var myGameArea;
var ovoce;
var pozice = [];
var delka = 2;
function startGame() {
    obraz();
    myGameArea = new MyGameArea();
    myGameArea.start();
    addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    });
    snake = new Snake(rozliseni, rozliseni, "black", hraci_x / 2 * rozliseni, hraci_y / 2 * rozliseni);
    ovoce = new Ovoce(rozliseni, rozliseni, "red");
    ovoce.generate();
    ovoce.update(myGameArea.context);
}
function updateGameArea() {
    if (ovoce.x == snake.x && ovoce.y == snake.y) {
        delka++;
        ovoce.generate();
        ovoce.update(myGameArea.context);
    }
    /*myGameArea.clear();*/
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
        this.canvas.width = hraci_x * rozliseni;
        this.canvas.height = hraci_y * rozliseni;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 150);
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
        this.color = color;
    }
    Snake.prototype.update = function (ctx) {
        ctx.fillStyle = this.color;
        pozice.push({ x: this.x, y: this.y });
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.clearRect(pozice[1].x, pozice[1].y, this.width, this.height);
        ctx.font = "30px Arial";
        ctx.fillText("Score: " + delka, 10, 50);
        while (pozice.length > delka) {
            pozice.splice(0, 1);
        }
    };
    Snake.prototype.up = function () {
        this.y -= rozliseni;
    };
    Snake.prototype.down = function () {
        this.y += rozliseni;
    };
    Snake.prototype.left = function () {
        this.x -= rozliseni;
    };
    Snake.prototype.right = function () {
        this.x += rozliseni;
    };
    return Snake;
}());
var Ovoce = /** @class */ (function () {
    function Ovoce(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Ovoce.prototype.update = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Ovoce.prototype.generate = function () {
        this.x = getRandomInt(1, hraci_x) * rozliseni;
        this.y = getRandomInt(1, hraci_y) * rozliseni;
    };
    return Ovoce;
}());
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function obraz() {
    hraci_x = Math.floor(document.documentElement.clientWidth / rozliseni);
    hraci_y = Math.floor(document.documentElement.clientHeight / rozliseni);
}
//# sourceMappingURL=index.js.map