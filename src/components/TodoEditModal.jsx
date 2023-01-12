import React from 'react';

export default function TodoEditModal() {
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
            Change todo name
          </h3>
          <form className="max-w-md mx-auto flex justify-center gap-1 items-center">
            <input
              type="text"
              name="todoText"
              placeholder="Type your todo"
              className="input input-bordered w-full max-w-xs input-sm"
            />
            <label
              htmlFor="my-modal-3"
              className="btn btn-success btn-sm text-white"
            >
              Update
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
