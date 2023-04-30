import React from 'react';
import './Tasks.css';

function NewTask() {
  return (
    <div className="mx-10 pb-[50px]">
      <div className="border border-solid border-black9 rounded-md p-[50px]">
        <h1 className="font-[600] tasksH grow">New Task</h1>

        <form action="POST">
          <p className="font-black text-[16px] font-[600] mt-5">
            Title
          </p>
          <input
            type="text"
            placeholder="Enter a title"
            className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md my-2 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
          />
          <p className="text-gray-400 text-sm">The title must contain a maximum of 32 characters</p>

          <p className="font-black text-[16px] font-[600] mt-5">
            Details
          </p>
          <textarea
            name="Enter task details"
            cols="30"
            rows="6"
            placeholder="Body"
            className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md mb-6  mt-2 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
          />

          <section className="flex items-center justify-between mt-[30px]">

            <button
              type="submit"
              className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
            >
              Create Task
            </button>
          </section>
        </form>
      </div>

    </div>
  );
}

export default NewTask;
