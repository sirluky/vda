var snake: Snake;
var myGameArea: MyGameArea;

function startGame() {
    myGameArea = new MyGameArea();
    myGameArea.start();

    addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    })

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

class MyGameArea {
    canvas = document.createElement("canvas");
    context: CanvasRenderingContext2D = null;
    key: number = null;
    start() {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 1000);

    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

class Snake {
    width: number;
    height: number;
    x: number;
    y: number;
    color: string;

    constructor(width: number, height: number, color: string, x: number, y: number) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    update(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    up() {
        this.y -= 30;
    }
    down() {
        this.y += 30;
    }
    left() {
        this.x -= 30;
    }
    right() {
        this.x += 30;
    }
}


