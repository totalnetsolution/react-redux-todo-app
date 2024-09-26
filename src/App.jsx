import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo App with Redux</h1>
      <div className="card shadow-lg p-4">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
