import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="py-10">
      <h1 className="font-bold text-center text-3xl">
        Note your important todos
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
