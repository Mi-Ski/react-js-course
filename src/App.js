import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
	const [tasks, setTasks] = useState([]);

	const transformedTasks = useCallback(tasksObj => {
		const loadedTasks = [];

		for (const taskKey in tasksObj) {
			loadedTasks.push({id: taskKey, text: tasksObj[taskKey].text});
		}

		setTasks(loadedTasks);
	}, []);

	const httpData = useHttp(transformedTasks);
	const {isLoading, error, sendRequest: fetchTasks} = httpData;

	useEffect(() => {
		fetchTasks({url: "https://react-app-869e8-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"});
	}, []);

	const taskAddHandler = task => {
		setTasks(prevTasks => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
