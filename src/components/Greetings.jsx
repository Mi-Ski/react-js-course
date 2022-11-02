import { useState, useEffect } from "react";

const Greetings = () => {
	const [name, setName] = useState("John");
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then(res => res.json())
			.then(data => setEmails(data.map(account => account.email)));
	}, []);

	return (
		<div>
			<h2>Hello World!</h2>
			{emails && emails.map(email => <p key={email}>{email}</p>)}
			<form>
				<label htmlFor="name">Name: </label>
				<input type="text"
					id="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</form>
			<p>It's good to see you! {name}</p>
		</div>
	);
};

export default Greetings;
