import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
	const chartDataPoints = [
		{label: 'Jan', value: 0},
		{label: 'Feb', value: 0},
		{label: 'Mar', value: 0},
		{label: 'Apr', value: 0},
		{label: 'May', value: 0},
		{label: 'Jun', value: 0},
		{label: 'Jul', value: 0},
		{label: 'Aug', value: 0},
		{label: 'Sep', value: 0},
		{label: 'Oct', value: 0},
		{label: 'Nov', value: 0},
		{label: 'Dec', value: 0} 
	];

	// props.expenses.forEach( el => {
	// 	const expenseMonth = el.date.getMonth(); // starting at 0 (jan=0)
	// 	chartDataPoints[expenseMonth].value += el.amount;
	// })

	for (const el of props.expenses) {
		const expenseMonth = el.date.getMonth(); // starting at 0 (jan=0)
		chartDataPoints[expenseMonth].value += el.amount;
		console.log(chartDataPoints);
	}

	return  <Chart chartDataPoints={chartDataPoints} />
}

export default ExpensesChart;