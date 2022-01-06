import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.scss';

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h1 className="expenses-list__fallback">No expenses found.</h1>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((el) => (
				<ExpenseItem
					key={el.id}
					date={el.date}
					title={el.title}
					amount={el.amount}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
