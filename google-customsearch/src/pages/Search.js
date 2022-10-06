import { Link } from "react-router-dom";
import { useState } from "react";

const Search = () => {
	const [inputValue, setInputValue] = useState("");
	const inputValChanged = e => {
		setInputValue(e.target.value);
	};
	let query;

	if (inputValue) {
		query = "/search/" + inputValue.toLowerCase();
	}

	return (
		<div>
			<h1>Search</h1>
			<input type="text"
				value={inputValue}
				onChange={inputValChanged}
			/>
			{query ? <Link to={query}>Search on google images</Link> : null}
		</div>
	);
};

export default Search;
