import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";


const QuoteDetails = () => {
	const {id: params} = useParams();
	console.log( params);
	return (
		<> 
			<div>QuoteDetails</div>
			<h1>Params: {params}</h1>
			<Route path={`/quotes/${params}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetails;