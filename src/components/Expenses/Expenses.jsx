import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

const Expenses = (props) => {
	return (
		<Card className="expenses">
			{props.items.map((el) => (
				<ExpenseItem
					title={el.title}
					amount={el.amount}
					date={el.date}
					key={el.id}
				></ExpenseItem>
			))}
		</Card>
	);
};

export default Expenses;
