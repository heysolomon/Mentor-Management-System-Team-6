import React from 'react';
import './Tasks.css';
import { useDispatch } from 'react-redux';
import { RemoveIcon } from '../../../assets/images';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import CreateTask from '../../../components/Modals/CreateTask';

function NewTask() {
  const dispatch = useDispatch();
  const handleSuccess = () => {
    dispatch(openModal(<CreateTask />));
  };
  return (
    <div className="mx-10 pb-[50px]">
      <div className="border border-solid border-black9 rounded-md p-[50px]">
        <h1 className="font-[600] tasksH grow">New Task</h1>

        <p className="font-black text-[16px] font-[600] mt-5">Title</p>
        <input
          type="text"
          placeholder="Enter a title"
          className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md my-2 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
        />
        <p className="text-gray-400 text-sm">
          The title must contain a maximum of 32 characters
        </p>

        <p className="font-black text-[16px] font-[600] mt-5">Details</p>
        <textarea
          name="Enter task details"
          cols="30"
          rows="6"
          placeholder="Body"
          className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md mb-6  mt-2 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
        />
        {/* start mentors */}
        <div className="flex md:flex-row flex-col">
          <div className="basis-1/1 md:basis-1/2 bg-pri11 mr-4 flex flex-col md:flex-row items-center rounded mb-2">
            <div className="flex flex-col grow justify-center items-center">
              <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-2">
                Add Mentor Manager
              </p>
              {/* start select mentor */}
              <div className="flex flex-row bg-white px-3 py-.5 mb-2">
                <p className="mr-3">10 Selected </p>
                <RemoveIcon styling="ml-2 object-contain cursor-pointer" />
              </div>
              {/* end select mentor */}
            </div>
            <div className="flex flex-col  justify-center items-center">
              <button
                type="button"
                className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white font-light font-sm lg:mr-10  mr-2 max-md:self-center self-start lg:text-base text-sm"
              >
                Select
              </button>
            </div>
          </div>

          <div className="basis-1/1 md:basis-1/2 bg-pri11 mr-4 flex flex-col md:flex-row items-center rounded ">
            <div className="flex flex-col grow justify-center items-center">
              <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1">
                Add Mentor
              </p>
              {/* start select mentor */}
              <div className="flex flex-row bg-white px-3 py-.5 mb-2">
                <p className="mr-3">10 Selected </p>
                <RemoveIcon styling="pl-3 object-contain cursor-pointer" />
              </div>
              {/* end select mentor */}
            </div>
            <div className="flex flex-col  justify-center items-center">
              <button
                type="button"
                className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-2 font-light font-sm lg:mr-10  max-md:self-center self-start lg:text-base text-sm"
              >
                Select
              </button>
            </div>
          </div>
        </div>
        {/* end mentors */}
        <section className="flex items-center justify-between mt-[30px]">
          <button
            type="submit"
            className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
            onClick={handleSuccess}
          >
            Create Task
          </button>
        </section>
      </div>
    </div>
  );
}

export default NewTask;
