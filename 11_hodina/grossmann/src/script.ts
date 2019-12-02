let canv: Canvas;
let arena: Arena;
let snake: Snake;

function startGame() {
    canv =
        new Canvas(400, 400);
    arena =
        new Arena('orange');
    snake = 
        new Snake(4);
}

class Canvas {
    canvas = document.createElement('canvas');
    ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');
    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    draw(color: string, startX: number, startY: number, sizeX: number, sizeY: number) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(startX, startY, sizeX, sizeY);
    }

    clearCanvas() {

    }
}

class Arena {
    arenaBGColor: string;
    arenaBorderColor: string;
    constructor(arenaBorderColor: string, arenaBGColor: string  = 'gray') {
      this.arenaBGColor = arenaBGColor;
      this.arenaBorderColor = arenaBorderColor;
    }

    wrapArena() {


    }
}

class Snake {
    snakeLength: number;
    constructor(snakeLength: number) {
        this.snakeLength = snakeLength;
    }

    snakeMovement() {

    }
}