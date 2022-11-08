import { createContext, useState } from "react";
import Todo from "../models/Todo";

export const TodosContext = createContext<{
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
})

const TodosContextProvider = (props: any) => {
	const initTodos = [
		new Todo('Learn React'),
		new Todo('Learn TypeScript'),
	]

	const [todos, setTodos] = useState<Todo[]>(initTodos);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		})
	}

	const onDeleteTodo = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		})
	}

	const contextValue = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: onDeleteTodo,
	}

	return <TodosContext.Provider value={contextValue}>
		{props.children}
	</TodosContext.Provider>
}

export default TodosContextProvider;