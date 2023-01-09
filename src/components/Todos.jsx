import React from 'react';
import Todo from './Todo';

const Todos = () => {
  return (
    <div>
      <div className="max-w-md mx-auto">
        <ul>
          <Todo />
        </ul>
      </div>
    </div>
  );
};

export default Todos;
