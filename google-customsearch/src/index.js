import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

window.onfocus = function () {
	document.title = "React App";
	document.querySelector("link[rel*='icon']").href = "./favicon.ico";
	clearInterval(interval);
};

let interval;
let firstLoop = true;

window.onblur = () => {
	firstLoop = true;
	createInterval();
};

const createInterval = () => {
	let titleIdx = 0;
	let iconIdx = 0;

	const napisy = ["!!!UWAGA!!!", "<<<WRÓĆ>>>", "-> home"];
	const ikony = ["./danger.ico", "./bug.ico"];

	document.title = napisy[titleIdx];
	document.querySelector("link[rel*='icon']").href = ikony[iconIdx];

	interval = setInterval(() => {
		if (firstLoop) {
			firstLoop = false;
			titleIdx = 1;
			iconIdx = 1;
			document.title = napisy[titleIdx];
			document.querySelector("link[rel*='icon']").href =
        ikony[iconIdx];
			titleIdx++;
			return;
		}

		iconIdx === 1 ? (iconIdx = 0) : iconIdx++;
		document.querySelector("link[rel*='icon']").href = ikony[iconIdx];

		document.title = napisy[titleIdx];
		if (titleIdx === 2) {
			titleIdx = 0;
			return;
		} else titleIdx++;
	}, 1000);
};
