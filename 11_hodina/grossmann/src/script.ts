let canv: Canvas;

class Canvas {
    canvas = document.createElement('canvas');
    ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');
    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    draw() {

    }

    clearCanvas() {

    }
}

class Arena {
    arenaBGColor: string;
    arenaBorderColor: string;
    constructor(arenaBGColor: string, arenaBorderColor: string ) {
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