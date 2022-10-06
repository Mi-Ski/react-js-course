import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Layout>
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
				<Route path="*"
					component={NotFound}
				/>
				
			</Switch>
		</Layout>
	);
}

export default App;
