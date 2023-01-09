import React from 'react';
import { toast } from 'react-hot-toast';

function AddTodo({ refetch }) {
  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const todo = form.todoText.value;

    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        todoName: todo,
      }),
    })
      .then(res => res.json())
      .then(() => {
        form.reset();
        refetch();
        toast.success('Todo added');
      });
  }

  return (
    <div className="py-10">
      <form
        className="max-w-md mx-auto flex justify-center gap-1 items-center"
        onSubmit={handleAddTodo}
      >
        <input
          type="text"
          name="todoText"
          placeholder="Type your todo"
          className="input input-bordered w-full max-w-xs input-sm"
        />
        <button className="btn btn-success btn-sm text-white">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
