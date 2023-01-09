import React from 'react';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <div className="py-10">
      <h1 className="font-bold text-center text-3xl">
        Note your important todos
      </h1>
      <AddTodo />
    </div>
  );
};

export default App;
