import React from "react";
import { TodoListProps } from "../todo.model";
import './TodoList.css';

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, onDeleteItem } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteItem.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
