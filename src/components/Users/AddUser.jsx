import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import Button from '../UI/Button.jsx';
import Modal from '../UI/Modal.jsx';

import styles from './AddUsers.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [inputError, setInputError] = useState(null);

	const addUserHandler = (e) => {
		e.preventDefault();

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setInputError({title: "Invalid input.", message: "Please enter a valid name and age (non-empty values)."})
			return;
		}
		if (Number(enteredAge) < 1) {
			setInputError({title: "Invalid age.", message: "Please enter a vaild age (greater than 0)."})
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);

		setEnteredAge('');
		setEnteredUsername('');
		console.log(enteredUsername, enteredAge);
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const modalHandler = () => {
		setInputError(null);
	}


	return (
		<>
			{inputError && <Modal onClose={modalHandler} title={inputError.title} message={inputError.message} />}	
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						value={enteredUsername}
						onChange={usernameChangeHandler}
						type="text"
						id="username"
					/>
					<label htmlFor="age">Age</label>
					<input
						value={enteredAge}
						onChange={ageChangeHandler}
						type="number"
						id="age"
					/>
					<Button type="submit">Add Users</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
