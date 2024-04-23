var snake: Snake;
var myGameArea: MyGameArea;
var eats: pozitionType[] = [];

function startGame() {
    myGameArea = new MyGameArea();
    myGameArea.start();

    addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    })

    snake = new Snake(30, 30, "green", 90, 90);
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

    if(snake.aktual.x > myGameArea.canvas.width){
        snake.aktual.x=300;
    }
    if(snake.aktual.x < 0){
        snake.aktual.x=300;
    }
    if(snake.aktual.y > myGameArea.canvas.height){
        snake.aktual.y=300;
    }
    if(snake.aktual.y < 0){
        snake.aktual.y=300;
    }


    for (let i = 0; i < eats.length; i++) {
        if (ifContent(eats[i], snake.aktual)) {
            eats.splice(i, 1);
            snake.length++;
        }
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
        setInterval(updateGameArea, 500);
        setInterval(() =>
            eats.push({ x: getRandomInt(1, 20) * 30, y: getRandomInt(1, 20) * 30 })
            , 1000
        );
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function ifContent(a: pozitionType, b: pozitionType) {
    if (a.x == b.x && a.y == b.y) {
        return true;
    } else {
        return false;
    }
}

interface pozitionType {
    x: number;
    y: number;
}

class Snake {
    width: number;
    height: number;
    aktual: pozitionType;
    color: string;
    length: number;
    history: pozitionType[];

    constructor(width: number, height: number, color: string, x: number, y: number) {
        this.width = width;
        this.height = height;
        this.aktual = { x, y };
        this.length = 0;
        this.color = color;
        this.history = [];
    }
    update(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.aktual.x, this.aktual.y, this.width, this.height);

        for (let i: number = 0; i < this.length; i++) {
            let point = this.history[this.history.length - i - 1];
            ctx.fillRect(point.x, point.y, this.width, this.height);
        }
        for (let eat of eats) {
            ctx.fillStyle = "red";
            ctx.fillRect(eat.x, eat.y, this.width, this.height);
        }
    
    }
    up() {
        this.history.push({ x: this.aktual.x, y: this.aktual.y });
        this.aktual.y -= 30;
    }
    down() {
        this.history.push({ x: this.aktual.x, y: this.aktual.y });
        this.aktual.y += 30;
    }
    left() {
        this.history.push({ x: this.aktual.x, y: this.aktual.y });
        this.aktual.x -= 30;
    }
    right() {
        this.history.push({ x: this.aktual.x, y: this.aktual.y });
        this.aktual.x += 30;
    }
}


