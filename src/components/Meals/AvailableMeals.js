import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
	const [mealsList, setMealsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			setIsLoading(true);
			const response = await fetch(
				"https://react-app-869e8-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
				{
					headers: {
						"Access-Control-Allow-Origin": "*",
					},
				}
			);
			if (!response.ok) {
				console.log(response);
				throw new Error(`Server response: ${response.status}, ${response.statusText}`);
			}

			const responseData = await response.json();

			let mealsArray = [];
			for (const key in responseData) {
				mealsArray.push({ ...responseData[key], id: key });
			}

			setMealsList(mealsArray);
			setIsLoading(false);
		};

		fetchMeals().catch(err => {
			setIsLoading(false);
			setError(err);
		});
	}, []);

	if (isLoading) {
		return <p>Loading</p>;
	}
	if (error) {
		return (
			<section style={{textAlign: "center", color: "red", borderRadius: "20px", backgroundColor: "#333", padding: "2rem 1rem", maxWidth: "30rem", margin: "3rem auto", fontWeight: "bold"}}>
				<p>Something went wrong while fetching data.</p>
				<p>{error.message}</p>
			</section>
		);
	}

	const mealsArray = mealsList.map(meal => (
		<MealItem key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsArray}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
