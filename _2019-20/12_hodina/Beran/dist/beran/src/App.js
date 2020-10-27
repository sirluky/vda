System.register(["react", "./logo.svg", "./App.css"], function (exports_1, context_1) {
    "use strict";
    var react_1, logo_svg_1, App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (logo_svg_1_1) {
                logo_svg_1 = logo_svg_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            App = function () {
                return (<div className="App">
      <header className="App-header">
        <img src={logo_svg_1.default} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>);
            };
            exports_1("default", App);
        }
    };
});
//# sourceMappingURL=App.js.map