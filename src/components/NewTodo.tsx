import React, { useRef } from "react";
import { NewTodoProps } from '../todo.model';
import './NewTodo.css';

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const { takeDataInput } = props;
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    takeDataInput(enteredText);
    textInputRef.current!.value! = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
