import React from "react";
import ReactDOM from "react-dom";

// Import each component to be used, try to always use the same name.
import App from "./App"

// Import our style css file.
import style from "./style.css"

// Render/show the app itself.
ReactDOM.render(<App/>, document.getElementById("root"))
