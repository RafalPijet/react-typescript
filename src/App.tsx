import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (data: string) => {
    setTodos(prevTodods => [
      ...prevTodods,
      {
        id: `t${Math.random().toString()}`,
        text: data,
      },
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== id);
    })
  }

  return (
    <div>
      <NewTodo takeDataInput={todoAddHandler} />
      <TodoList items={todos} onDeleteItem={todoDeleteHandler}/>
    </div>
  );
};

export default App;
