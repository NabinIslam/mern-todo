import React from 'react';
import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <div>
      <div className="max-w-md mx-auto">
        <ul>
          {todos.map(todo => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
