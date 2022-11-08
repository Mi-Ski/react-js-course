import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
			<Todos items={['sdf']}></Todos>
    </div>
  );
};

export default App;
