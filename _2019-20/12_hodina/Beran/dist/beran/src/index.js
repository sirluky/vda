System.register(["react", "react-dom", "./index.css", "./App", "./serviceWorker"], function (exports_1, context_1) {
    "use strict";
    var react_1, react_dom_1, App_1, serviceWorker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (_1) {
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (serviceWorker_1) {
                serviceWorker = serviceWorker_1;
            }
        ],
        execute: function () {
            react_dom_1.default.render(<App_1.default />, document.getElementById('root'));
            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
            serviceWorker.unregister();
        }
    };
});
//# sourceMappingURL=index.js.map