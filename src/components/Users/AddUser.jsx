import React, { useState, useRef } from 'react';
import Card from '../UI/Card.jsx';
import Button from '../UI/Button.jsx';
import Modal from '../UI/Modal.jsx';
import Wrapper from '../Helpers/Wrapper.jsx';

import styles from './AddUsers.module.css';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [inputError, setInputError] = useState(null);

	const addUserHandler = (e) => {
		e.preventDefault();
		const enteredUsrUsername = nameInputRef.current.value;
		const enteredUsrAge =  ageInputRef.current.value;

		if (enteredUsrUsername.trim().length === 0 || enteredUsrAge.trim().length === 0) {
			setInputError({title: "Invalid input.", message: "Please enter a valid name and age (non-empty values)."})
			return;
		}
		if (Number(enteredUsrAge) < 1) {
			setInputError({title: "Invalid age.", message: "Please enter a vaild age (greater than 0)."})
			return;
		}
		props.onAddUser(enteredUsrUsername, enteredUsrAge);

		setEnteredAge('');
		setEnteredUsername('');
		console.log(enteredUsrUsername, enteredUsrAge);
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
		console.log(nameInputRef)
	};
	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const modalHandler = () => {
		setInputError(null);
	}


	return (
		<Wrapper>
			{inputError && <Modal onClose={modalHandler} title={inputError.title} message={inputError.message} />}	
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						value={enteredUsername}
						onChange={usernameChangeHandler}
						type="text"
						id="username"
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age</label>
					<input
						value={enteredAge}
						onChange={ageChangeHandler}
						type="number"
						id="age"
						ref={ageInputRef}
					/>
					<Button type="submit">Add Users</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
