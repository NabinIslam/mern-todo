import React from 'react';
import { toast } from 'react-hot-toast';

function TodoEditModal({ id, refetch, todoName }) {
  function handleUpdateTodo(event) {
    event.preventDefault();

    const form = event.target;
    const updatedTodo = form.todoText.value;

    fetch(`https://mern-todo-server.vercel.app/todos/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ todoName: updatedTodo }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          refetch();
          toast.success('Todo updated');
        }
      });
  }

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center mb-5">
            Change your todo
          </h3>
          <form
            className="max-w-md mx-auto flex justify-center gap-2 items-center"
            onSubmit={handleUpdateTodo}
          >
            <input
              type="text"
              name="todoText"
              defaultValue={todoName}
              className="input input-bordered w-full max-w-xs input-sm"
            />
            <label
              htmlFor="my-modal-3"
              className="btn btn-success btn-sm text-white"
              itemType="submit"
            >
              <button>Update</button>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoEditModal;
