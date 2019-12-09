const SNAKEWIDTH = 30;
export const SIRKAPOLE = 22;

// @ts-ignore
export let hraci: [{ body: Had; id: string }] = [];
export let jidlo;

export class Had {
	private x: any;
	private y: any;
	private movement: any;
	public smer: number;
	private barva: any;
	private ocas: any[];
	private delkaHada: number;
	public score: number;
	public willDie: boolean;

	constructor(x, y, barva) {
		this.x = x;
		this.y = y;
		this.smer = 0;
		this.barva = barva;
		this.ocas = [];
		this.delkaHada = 1;
		this.score = 0;
		this.willDie = false;
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
			dejJidlo();
			this.delkaHada++;
		}
	}
	narazil() {
		for (let { body: had } of hraci) {
			if (had === this) {
				for (let { x, y } of had.ocas) {
					if (x === had.x && y === had.y) {
						this.willDie = true;
						this.ocas = [];
						this.delkaHada = 1;
					}
				}
			} else {
				for (let { x, y } of had.ocas) {
					if (x === had.x && y === had.y) {
						this.willDie = true;
						this.ocas = [];
						this.delkaHada = 1;
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

export function dejJidlo() {
	jidlo = { x: Math.floor(random(SIRKAPOLE)), y: Math.floor(random(SIRKAPOLE)) };
}

export function random(max: number): number {
	const val = Math.random() * max;
	return val;
}

export function randomSnakeColor() {
	const colors = ['lawngreen', 'mediumseagreen', 'aquamarine', 'blue', 'violet'];
	return colors[Math.floor(random(colors.length))];
}
