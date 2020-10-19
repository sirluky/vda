import p5 from "p5";
// import { Had } from "snake";
export const SNAKEWIDTH = 30;
let SIRKAPOLE: number;

let hadi: any = [];
let jidlo: { x: number; y: number };

interface Coords {
	x: number;
	y: number;
}

const sketch = (p5: any) => {
	p5.dejJidlo = () => {
		jidlo = {
			x: p5.floor(p5.random(SIRKAPOLE)),
			y: p5.floor(p5.random(SIRKAPOLE))
		};
	};

	class Had {
		public x: number;
		public y: number;
		public movement: number[];
		public smer: number;
		public barva: any;
		public ocas: Coords[];
		public delkaHada: number;
		public score: number;
		public willDie: boolean;

		constructor(x: number, y: number, movement: number[], barva: any) {
			this.x = x;
			this.y = y;
			this.movement = movement;
			this.smer = 0;
			this.barva = barva;
			this.ocas = [];
			this.delkaHada = 1;
			this.score = 0;
			this.willDie = false;
		}
		show() {
			p5.fill(this.barva);
			p5.rect(
				1 + this.x * SNAKEWIDTH,
				1 + this.y * SNAKEWIDTH,
				SNAKEWIDTH - 2,
				SNAKEWIDTH - 2
			);

			for (let { x, y } of this.ocas) {
				p5.fill(this.barva);

				p5.rect(
					1 + x * SNAKEWIDTH,
					1 + y * SNAKEWIDTH,
					SNAKEWIDTH - 2,
					SNAKEWIDTH - 2
				);
			}
		}
		move() {
			this.ocas.push({ x: this.x, y: this.y });
			while (this.ocas.length > this.delkaHada) {
				this.ocas.splice(0, 1);
			}

			switch (this.smer) {
				case 1:
					this.x--;
					break;
				case 2:
					this.y--;
					break;
				case 3:
					this.x++;
					break;
				case 4:
					this.y++;
					break;
			}
			this.WallFlip();
		}
		WallFlip() {
			if (this.x > SIRKAPOLE) {
				this.x = 0;
			}
			if (this.y > SIRKAPOLE) {
				this.y = 0;
			}
			if (0 > this.x) {
				this.x = SIRKAPOLE - 1;
			}
			if (0 > this.y) {
				this.y = SIRKAPOLE - 1;
			}
		}
		sezer() {
			if (this.x === jidlo.x && this.y === jidlo.y) {
				this.score++;
				p5.dejJidlo();
				this.delkaHada++;
			}
		}
		narazil() {
			for (let had of hadi) {
				if (had === this) {
					for (let { x, y } of had.ocas) {
						if (x === had.x && y === had.y) {
							this.willDie = true;
							this.ocas = [];
							this.delkaHada = 0;
						}
					}
				} else {
					for (let { x, y } of had.ocas) {
						if (x === had.x && y === had.y) {
							this.willDie = true;
							this.ocas = [];
							this.delkaHada = 0;
						}
						// if(){}
					}
					if (this.x === had.x && this.y === had.y) {
						this.willDie = true;
						this.ocas = [];
						this.delkaHada = 0;
					}
				}
			}
		}
		die() {
			// if(this.)
			// this.ocas = []
		}
	}

	p5.setup = () => {
		const canvas = p5.createCanvas(660, 660);

		// pridani canvasu do html
		const dom = document.querySelector("#gameboard") as HTMLCanvasElement;
		dom.appendChild(canvas.elt);

		SIRKAPOLE = p5.width / SNAKEWIDTH;
		p5.background("black");
		hadi.push(new Had(5, 5, [37, 38, 39, 40], p5.color(255, 0, 0)));
		p5.dejJidlo();
		hadi.push(new Had(20, 20, [65, 87, 68, 83], p5.color(0, 255, 0)));
		p5.frameRate(5);
	};

	p5.draw = () => {
		p5.background("black");
		for (let had of hadi) {
			had.move();
			had.show();
			had.sezer();
			had.narazil();
		}
		p5.fill("yellow");
		p5.rect(jidlo.x * SNAKEWIDTH, jidlo.y * SNAKEWIDTH, SNAKEWIDTH, SNAKEWIDTH);
	};

	p5.keyPressed = () => {
		for (let had of hadi) {
			if (p5.keyIsDown(had.movement[0])) {
				had.smer = 1;
			} else if (p5.keyIsDown(had.movement[1])) {
				had.smer = 2;
			} else if (p5.keyIsDown(had.movement[2])) {
				had.smer = 3;
			} else if (p5.keyIsDown(had.movement[3])) {
				had.smer = 4;
			}
		}
	};
};
// export const P5 = new p5(sketch);
export default sketch;
