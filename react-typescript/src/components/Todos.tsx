import React, {useContext} from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";


const Todos = () => {
	const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items?.map((todo) => (
        <TodoItem
          text={todo.text}
          key={todo.id}
					onClickItem={() => todosCtx.removeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
