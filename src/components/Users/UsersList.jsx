import React from 'react';
import Card from '../UI/Card.jsx';
import styles from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<Card className={styles.users}>
		<ul>
			{props.users.map((el) => {
				return (
					<li key={el.id}>
						{el.name} ({el.age} years old).
					</li>
				);
			})}
		</ul>
		</Card>	
	);
};

export default UsersList;
