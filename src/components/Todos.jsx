import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, refetch }) => {
  return (
    <div>
      <div className="max-w-md mx-auto">
        <ul>
          {todos.map(todo => (
            <Todo key={todo._id} todo={todo} refetch={refetch} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
