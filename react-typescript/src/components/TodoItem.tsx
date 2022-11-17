interface TodoProps {
  text: string;
  readonly key: string;
  onClickItem: () => void;
}

const liStyles = {
  listStyle: "none",
  margin: "0.5rem 0",
  padding: "0.5rem",
  border: "1px solid #ccc",
  boxShadow: "0 2px 8px #ccc",
  borderRadius: "4px",
};

const TodoItem = (props: TodoProps) => {
  return (
    <li onClick={() => props.onClickItem()} style={liStyles}>
      <p>Item:</p>
      {props.text}
    </li>
  );
};

export default TodoItem;
