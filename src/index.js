import React from "react";
import { render } from "react-dom";
import "./styles/styles.css";
import "./styles/theme.css";
import App from "./App";
import { server } from "./mocks/server.js";

// start mock server
server();

history.scrollRestoration = "manual";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#app")
);

if (module.hot) {
  module.hot.accept();
}

// Allow mobile webkit devices to see :active styles on tap
document.addEventListener("touchstart", function () {}, true);
