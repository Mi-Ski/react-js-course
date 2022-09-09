import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
	const history = useHistory();

	const addQuoteHandler = quoteData => {
		console.log(quoteData.text, quoteData.author);
		history.push("/quotes");
	};

	return <QuoteForm isLoading={false}
		onAddQuote={addQuoteHandler}
	/>;
};

export default NewQuote;
