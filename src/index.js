import React from "react";
import ReactDom from "react-dom";
import Hello from "./components/hello/hello.js"
// ReactDom.render(
//     <Hello />,document.getElementById("app")
// )
import getRouter from './router/index.js';

ReactDom.render(
    getRouter(), document.getElementById('app'));