import React from 'react';
import {useRef, useContext} from 'react';
import { TodosContext } from '../store/todos-context';



const funct = <T,>(argument: T, argument2: T): T[] => {
	return [argument, argument, argument2]
}

const arr = funct<string>("2", "b");
const arrnum  = funct<number>(1, 2);



const NewTodo = () => {
	const todosContext = useContext(TodosContext);

	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = inputRef.current!.value;

		if (enteredText.trim().length === 0) {
			//throw an error
			return;
		}

		todosContext.addTodo(enteredText);
	}

	return <form onSubmit={submitHandler}>
		<label htmlFor="text-input">Todo text</label>
		<input type="string" id="text-input" ref={inputRef} />
		<button>Submit</button>
	</form>

}

export default NewTodo;