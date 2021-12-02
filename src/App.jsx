import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.scss';

const App = (props) => {
	const [list, setList] = useState(props.expenses);

	const btnHandler = () => {
		const titleEl = document.getElementById('title');
		const amountEl = document.getElementById('amount');
		const newObj = {};

		if (titleEl.value && amountEl.value) {
			newObj.id = Math.random() * 1000;
			newObj.title = titleEl.value;
			newObj.amount = amountEl.value;
			newObj.date = new Date();

			list.unshift(newObj);
			console.log(list);
		setList(list);
		} else return;
	};

	return (
		<div className="App">
			<Expenses items={list} />
			<div>
			</div>
			{/* <input id="title" type="text" placeholder="Expense title" />
			<input id="amount" type="number" placeholder="Amount" />
			<button id="btn" onClick={btnHandler}>
				Submit
			</button> */}
		</div>
	);
};

export default App;

{
	/* {list.map((el) => (
				<div
					title={el.title}
					amount={el.amount}
					date={el.date}
					key={el.id}
				></div>
			))} */
}
{
	/* {list.map(el => (
				<div key={el.id}>{el.title}</div>
			))} */
}
