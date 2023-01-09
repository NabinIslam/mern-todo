import React from 'react';

const Todo = ({ todo }) => {
  const { todoName } = todo;
  return (
    <li className="flex items-center justify-between gap-5 border p-2 rounded-lg my-1">
      <p className="font-semibold text-black">{todoName}</p>
      <div className="flex items-center">
        <button className="btn btn-success btn-sm text-white mr-1">Edit</button>
        <button className="btn btn-error btn-sm text-white">Delete</button>
      </div>
    </li>
  );
};

export default Todo;
