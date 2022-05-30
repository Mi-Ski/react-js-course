import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(
				"https://react-app-869e8-default-rtdb.europe-west1.firebasedatabase.app/movies.json", {
					method: "POST",
					body: JSON.stringify({
						name: "random movie name",
						imdb_rating: 4.5
					}),
					headers: {
						"Content-type": "application/json"
					}
				}
			);
			if (!response.ok) {
				throw new Error("wtf");
			}
			const data = await response.json();

			const transformedMovies = data.results.map(el => {
				return {
					id: el.episode_id,
					title: el.title,
					openingText: el.opening_crawl,
					releaseDate: el.release_date,
				};
			});

			setMovies(transformedMovies);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
		}
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && <p>Fetch movies to start.</p>}
				{isLoading && !error && <p>Loading...</p>}
				{error && (
					<div>
						<p>Oopsie woopsie!</p> <p>{error.message}</p>
					</div>
				)}
			</section>
		</React.Fragment>
	);
}

export default App;
