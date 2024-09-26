import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <li className="text-center p-4">No todos yet!</li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
