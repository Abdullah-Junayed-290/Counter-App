import { useState } from "react";
import "./App.css";
import useCounterStore from "./store/store.js";

function App() {
	const { count, increase, decrease, reset } = useCounterStore();

	return (
		<>
			<div>
				<h3>count: {count}</h3>
				<button onClick={increase}>increase +</button>
				<br />
				<button onClick={decrease}>decrease -</button>
				<br />
				<button onClick={reset}>reset</button>
			</div>
		</>
	);
}

export default App;
