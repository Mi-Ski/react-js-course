import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.scss';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filteredArr = props.items.filter(
		(el) => el.date.getFullYear().toString() === filteredYear.toString()
	);
	console.log(filteredArr);

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};


	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredArr} />
				<ExpensesList items={filteredArr}/>
			</Card>
		</div>
	);
};

export default Expenses;
