var hraci_x: number;              // nastavení velikosti hracího pole na x
var hraci_y: number;              // nastavení velikosti hracího pole na y
var rozliseni: number = 20;            // nastavení velikosti jednoho čtverečku

var snake: Snake;
var myGameArea: MyGameArea;
var ovoce: Ovoce;
let pozice: pozice[] = [];
var delka: number = 2;

interface pozice{
    x: number,
    y: number   
}

function startGame() {
    obraz();
    myGameArea = new MyGameArea();
    myGameArea.start();
    
    

    addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    })

    snake = new Snake(rozliseni, rozliseni, "black", hraci_x/2*rozliseni, hraci_y/2*rozliseni);
    ovoce = new Ovoce(rozliseni, rozliseni, "red");
    ovoce.generate();
    ovoce.update(myGameArea.context);
}

function updateGameArea() {
    if(ovoce.x == snake.x && ovoce.y == snake.y){
        delka ++;
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

class MyGameArea {
    canvas = document.createElement("canvas");
    context: CanvasRenderingContext2D = null;
    key: number = null;
    start() {
        this.canvas.width = hraci_x * rozliseni;
        this.canvas.height = hraci_y * rozliseni;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 150);

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
        this.color = color;
    }
    update(ctx: any) {
        ctx.fillStyle = this.color;
        pozice.push({x:this.x , y:this.y});
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.clearRect(pozice[1].x, pozice[1].y, this.width, this.height);
        
        while (pozice.length > delka ){
            pozice.splice(0, 1);
        }
    }
    up() {
        this.y -= rozliseni;
    }
    down() {
        this.y += rozliseni;
    }
    left() {
        this.x -= rozliseni;
    }
    right() {
        this.x += rozliseni;
    }
}

class Ovoce {
    width: number;
    height: number;
    x: number;
    y: number;
    color: string;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    generate(){
        this.x = getRandomInt(1, hraci_x) * rozliseni;
        this.y = getRandomInt(1, hraci_y) * rozliseni;
    }

}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function obraz(){
    hraci_x = Math.floor( document.documentElement.clientWidth / rozliseni);
    hraci_y = Math.floor( document.documentElement.clientHeight / rozliseni);
}




