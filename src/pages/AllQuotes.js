import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is fun!" },
	{ id: "q2", author: "Maximilian", text: "Learning React is great!" },
	{ id: "q3", author: "Maximilian", text: "Learning React is awesome!" },
	{ id: "q4", author: "Maximilian", text: "Learning React is cool!" },
];

const AllQuotes = () => {
	return (
		<>
			<div>AllQuotes</div>
			<QuoteList quotes={DUMMY_QUOTES} />
		</>
	);
};

export default AllQuotes;