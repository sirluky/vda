const SNAKEWIDTH = 30;
let SIRKAPOLE;
const socket = io();

let hadi = [];
let jidlo;
const ovladace = [{ movement: [37, 38, 39, 40] }, { movement: [65, 87, 68, 83] }];

function preload() {}

function setup() {
	createCanvas(660, 660);
	SIRKAPOLE = width / SNAKEWIDTH;
	background('black');
	// hadi.push(new Had(5, 5, [37, 38, 39, 40], color(255, 0, 0)));
	// hadi.push(new Had(20, 20, [65, 87, 68, 83], color(0, 255, 0)));
	// frameRate(5);
	noLoop();

	socket.on('gameState', payload => {
		hadi = payload.hadi;
		jidlo = payload.jidlo;
		// redraw();
		zobraz();
		// debugger;
	});
}
function zobraz() {
	background('black');
	for (let had of hadi) {
		// had.move();
		// had.narazil();
		// had.show();
		fill(had.barva);
		rect(1 + had.x * SNAKEWIDTH, 1 + had.y * SNAKEWIDTH, SNAKEWIDTH - 2, SNAKEWIDTH - 2);

		for (let { x, y } of had.ocas) {
			fill(had.barva);

			rect(1 + x * SNAKEWIDTH, 1 + y * SNAKEWIDTH, SNAKEWIDTH - 2, SNAKEWIDTH - 2);
		}
		// had.sezer();
	}
	fill('yellow');
	rect(jidlo.x * SNAKEWIDTH, jidlo.y * SNAKEWIDTH, SNAKEWIDTH, SNAKEWIDTH);
}

// function draw() {
// 	background('black');
// 	for (let had of hadi) {
// 		// had.move();
// 		// had.narazil();
// 		// had.show();
// 		fill(had.barva);
// 		rect(1 + had.x * SNAKEWIDTH, 1 + had.y * SNAKEWIDTH, SNAKEWIDTH - 2, SNAKEWIDTH - 2);

// 		for (let { x, y } of had.ocas) {
// 			fill(had.barva);

// 			rect(1 + x * SNAKEWIDTH, 1 + y * SNAKEWIDTH, SNAKEWIDTH - 2, SNAKEWIDTH - 2);
// 		}
// 		// had.sezer();
// 	}
// 	fill('yellow');
// 	// rect(jidlo.x * SNAKEWIDTH, jidlo.y * SNAKEWIDTH, SNAKEWIDTH, SNAKEWIDTH);
// }

function keyPressed() {
	let smer;
	for (let ovladani of ovladace) {
		if (keyIsDown(ovladani.movement[0])) {
			smer = 1;
		} else if (keyIsDown(ovladani.movement[1])) {
			smer = 2;
		} else if (keyIsDown(ovladani.movement[2])) {
			smer = 3;
		} else if (keyIsDown(ovladani.movement[3])) {
			smer = 4;
		}
	}
	if (smer > 0) {
		socket.emit('changeDirection', smer);
	}
}
