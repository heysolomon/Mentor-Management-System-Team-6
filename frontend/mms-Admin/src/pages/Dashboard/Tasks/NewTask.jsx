import React, { useState } from 'react';
import './Tasks.css';
import { useDispatch } from 'react-redux';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter,
  BsPlusCircle } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { RemoveIcon, UserAvatar } from '../../../assets/images';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import CreateTask from '../../../components/Modals/CreateTask';

function NewTask() {
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState(false);
  const [mentorsOpen, setmentors] = useState(true);

  const dispatch = useDispatch();
  const handleSuccess = () => {
    dispatch(openModal(<CreateTask />));
  };
  const search = () => {
    setChecked(true);
  };
  return (
    <div className="mx-10 pb-[50px]">
      <div className="">
        <h1 className="font-[600] tasksH grow flex-basis-1 w-full">New Task</h1>
        <div className="max-lg:flex-col-reverse flex grow flex-row max-lg:mt-5">
          <div className="grow">
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
              <div className="basis-1/1 md:basis-1/2 bg-pri11 mb-2 mr-4 flex flex-col md:flex-row items-center rounded ">
                <div className="flex flex-col grow justify-center items-center grow">
                  <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1">
                    Add Mentor Manager
                  </p>
                  {/* start select mentor */}
                  <div
                    className="flex flex-row bg-white px-3 py-.5 mb-2"
                    onClick={() => setmentors(false)}
                    onKeyDown={() => setmentors(false)}
                    role="button"
                    tabIndex={0}
                  >
                    <p className="mr-3">10 Selected </p>
                    <RemoveIcon styling="ml-2 object-contain cursor-pointer" />
                  </div>
                  {/* end select mentor */}
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setmentors(true)}
                    onKeyDown={() => setmentors(false)}
                    className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-1 font-light font-sm   max-md:self-center self-start lg:text-base text-sm"
                  >
                    Select
                  </button>
                </div>
              </div>

              <div className="basis-1/1 md:basis-1/2 bg-pri11 mr-4 flex flex-col md:flex-row items-center rounded ">
                <div className="flex flex-col grow justify-center items-center grow">
                  <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1 ">
                    Add Mentor
                  </p>
                  {/* start select mentor */}
                  <div
                    className="flex flex-row bg-white px-3 py-.5 mb-2"
                    onClick={() => setmentors(false)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => setmentors(false)}
                  >
                    <p className="mr-3">10 Selected </p>
                    <RemoveIcon
                      styling="pl-3 object-contain cursor-pointer"
                    />
                  </div>
                  {/* end select mentor */}
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setmentors(true)}
                    className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-1 font-light font-sm   max-md:self-center self-start lg:text-base text-sm"
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
          {/* start tasks */}
          <div className={`${mentorsOpen ? '' : 'hidden'} `}>
            <div className="tasksHeader flex flex-row justify-end">
              {checked ? (
                <div className="flex flex-row-reverse">
                  <input
                    type="text"
                    className="focus:outline-none bg-transparent pl-4 w-full"
                    placeholder="Search tasks"
                    onKeyDown={search}
                  />
                  <BiArrowBack
                    className="text-teal-700 text-2xl mx-2 cursor-pointer"
                    onClick={() => setChecked(false)}
                  />
                </div>
              ) : (
                <>
                  <RiSearchLine
                    className="text-teal-700 text-xl mx-2 cursor-pointer"
                    onClick={search}
                  />
                  <BsFilter
                    className={`text-teal-700 text-2xl mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => setSort(!sort)}
                  />

                  <AiOutlineClose
                    className={`text-teal-700 text-md mt-1 mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => setmentors(false)}
                  />
                </>
              )}
            </div>
            <div className="taskContainer me-5">
              {Array.from(Array(10)).map((i) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  className="task flex m-3 p-3 rounded-md items-center border-2
              border-grey-400 w-full cursor-pointer flex-row max-lg:flex-col
               max-lg:justify-self-start max-lg:justify-items-start"
                  key={i}
                >
                  <UserAvatar className="max-lg:mb-0 mb-2" />

                  <div className="rightTask ms-8 grow max-lg:w-full max-lg:mb-3">
                    <h3 className="font-semibold">Alison Davis</h3>
                    <div className="taskdate flex">
                      <p className="text-xs text-gray-600 font-light align-middle">
                        Program Assistant, Andela, She/her
                      </p>
                    </div>
                    <span className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1">
                      PROGRAM ASST.
                    </span>
                    <span className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1">
                      PROGRAM ASST.
                    </span>
                  </div>
                  <BsPlusCircle className="text-teal-700 text-2xl mx-2 cursor-pointer" />
                </div>
              ))}
            </div>
            {/* end tasks */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
