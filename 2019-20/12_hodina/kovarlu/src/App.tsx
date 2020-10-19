import React, { useEffect } from "react";
import logo from "./hadak.svg";
import "./App.css";
import sketch from "./components/had";
import p5 from "p5";

// export const P5 = ;

const App: React.FC = () => {
	useEffect(() => {
		new p5(sketch);
	}, []);

	return (
		<div className="App">
			<img src={logo} alt="" />
			<header className="App-header">
				<h1>Hra had</h1>

				<div className="" id="gameboard"></div>
				<p>Hra se ovlada pomoci sipek a WSAD klaves.</p>
			</header>
		</div>
	);
};

export default App;
