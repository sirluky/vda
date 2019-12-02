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
}

class Arena {
    arenaBGColor: string;
    
    constructor() {

    }
}

class Snake {

}