import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is fun!" },
	{ id: "q2", author: "Maximilian", text: "Learning React is great!" },
	{ id: "q3", author: "Maximilian", text: "Learning React is awesome!" },
	{ id: "q4", author: "Maximilian", text: "Learning React is cool!" },
];

const QuoteDetails = () => {
	const {id: params} = useParams();
	console.log( params);

	const quote = DUMMY_QUOTES.find(el => el.id === params);

	if (!quote) {
		return <p>No quote found!</p>;
	}
	return (
		<> 
			<HighlightedQuote author={quote.author}
				text={quote.text}
			/>
			<Route path={`/quotes/${params}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetails;