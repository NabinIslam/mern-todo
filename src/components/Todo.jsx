import React from 'react';
import { toast } from 'react-hot-toast';
import TodoEditModal from './TodoEditModal';

function Todo({ todo, refetch }) {
  const { todoName, _id } = todo;

  function handleTodoDelete(id) {
    fetch(`https://mern-todo-server.vercel.app/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success('Todo deleted');
        }
      });
  }

  return (
    <li className="flex items-center justify-between gap-5 border p-2 rounded-lg my-1">
      <p className="font-semibold text-black">{todoName}</p>
      <div className="flex items-center">
        <label
          htmlFor="my-modal-3"
          className="btn btn-success btn-sm text-white mr-1"
        >
          Edit
        </label>
        <TodoEditModal id={_id} refetch={refetch} todoName={todoName} />
        <button
          className="btn btn-error btn-sm text-white"
          onClick={() => handleTodoDelete(_id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
