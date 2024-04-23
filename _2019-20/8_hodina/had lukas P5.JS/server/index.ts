// server.js
// where your node app starts

// init project
import express from 'express';
const app = express();

import { Had, dejJidlo, hraci, jidlo, random, SIRKAPOLE, randomSnakeColor } from './snake'; // import socketIO from 'socket.io';
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
// const listener = app.listen(process.env.PORT, function() {
//   console.log("Your app is listening on port " + listener.address().port);
// });
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket: SocketIO.Socket) {
	console.log('a user connected');
	hraci.push({ body: new Had(Math.floor(random(SIRKAPOLE)), Math.floor(random(SIRKAPOLE)), randomSnakeColor()), id: socket.id });

	io.emit('gameState', { hadi: hraci.map(h => h.body), jidlo });

	socket.on('changeDirection', function(smer) {
		let hrac = hraci[hraci.findIndex(v => v.id === socket.id)];
		hrac.body.smer = smer;
	});
	// socket.emit('askName', 'Your name ?');

	// socket.on('setName', function(name) {
	// 	console.log(name);
	// 	hraci.push({ id: socket.id, name, cookies: 0 });
	// 	io.emit('players', hraci);
	// });

	// socket.on('cookieclicked', function() {
	// 	const index = hraci.findIndex(e => e.id == socket.id);
	// 	hraci[index].cookies += 1;
	// 	io.emit('players', hraci);
	// });

	socket.on('disconnect', function() {
		const index = hraci.findIndex(e => e.id == socket.id);
		hraci.splice(index, 1);
		io.emit('gameState', { hadi: hraci.map(h => h.body), jidlo });
	});

	// 	io.emit('players', hraci);
});

setInterval(function() {
	if (hraci) {
		for (let hrac of hraci) {
			// @ts-ignore
			hrac.body.move();
			hrac.body.sezer();
			hrac.body.narazil();
		}
		io.emit('gameState', { hadi: hraci.map(h => h.body), jidlo });
	}
}, 150);

http.listen(3000, function() {
	console.log('listening on *:3000');
});

dejJidlo();
