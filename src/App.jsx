import React, {useState} from "react";
import "./App.css";

function App() {
	const [buttonVisible, setButtonVisible] = useState(false);
	return (
		<div className="app">
			<h1>Hi there!</h1>
			<button onClick={() => {setButtonVisible( prevState => !prevState);}}>Toggle</button>
			{buttonVisible && <button>Super Secret Button</button>}
		</div>
	);
}

export default React.memo(App);
