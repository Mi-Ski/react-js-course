import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
	return (
		<>
			<MainNavigation />
			<Switch>
				<Route path="/"
					exact
				>	
					<Redirect to={"quotes"} />
				</Route>
				<Route path="/quotes/new"
					component={NewQuote}
				/>
				<Route exact
					path="/quotes"
					component={AllQuotes}
				/>
				<Route path="/quotes/:id"
					component={QuoteDetails}
				/>
			</Switch>
		</>
	);
}

export default App;
