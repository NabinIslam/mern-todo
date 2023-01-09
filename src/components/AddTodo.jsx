import React from 'react';

const AddTodo = () => {
  return (
    <div className="py-10">
      <form className="max-w-md mx-auto flex justify-center gap-1 items-center">
        <input
          type="text"
          placeholder="Type your todo"
          className="input input-bordered w-full max-w-xs input-sm"
        />
        <button className="btn btn-success btn-sm text-white">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
