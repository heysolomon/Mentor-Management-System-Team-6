import React, { useState } from 'react';
import './Tasks.css';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter, BsPeople, BsPerson } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { HiOutlineDocumentText, HiOutlineTrash } from 'react-icons/hi';
import { GoCalendar } from 'react-icons/go';
import taskImg from './task.png';

import styles from '../styles/dashboard.module.css';

function Tasks() {
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState(false);

  const search = () => {
    setChecked(true);
  };

  return (
    <div className="flex flex-row ">
      <div className={`basis-1/3 flex m-5 flex-col overflow-y-auto pb-5 h-screen ${styles.scroll}`}>
        <div className="tasksHeader flex flex-row">
          {checked ? (
            <div className="flex flex-row-reverse">
              <input
                type="text"
                className="focus:outline-none bg-transparent pl-4 w-full"
                placeholder="Search tasks"
                onKeyDown={search}
              />
              <BiArrowBack className="text-teal-700 text-2xl mx-2 cursor-pointer" onClick={() => setChecked(false)} />
            </div>
          ) : (

            <>
              <h1 className="font-[600] tasksH grow">Tasks</h1>
              <RiSearchLine className="text-teal-700 text-xl mx-2 cursor-pointer" onClick={search} />
              <BsFilter className={`text-teal-700 text-2xl mx-2 cursor-pointer ${sort ? 'rotate-180' : ''}`} onClick={() => setSort(!sort)} />
            </>
          )}

        </div>
        {/* start tasks */}
        <div className="taskContainer me-5">

          {
          Array.from(Array(10)).map((i) => (
            <div className="task flex m-3 p-3 rounded-md  border-2 border-grey-400 w-full cursor-pointer" key={i}>
              <img src={taskImg} alt={i} className="object-contain" />
              <div className="rightTask ms-8">
                <h3 className="font-semibold">Room Library article write...</h3>
                <div className="taskdate flex">

                  <GoCalendar className="text-teal-700 text-l me-3" />
                  <p className="text-xs text-gray-600 font-light align-middle  align-middle">3 days from now</p>
                </div>
              </div>
            </div>

          ))
        }
        </div>
        {/* end tasks */}
      </div>
      <div className="basis-2/3">
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
          >
            Create New Task
          </button>
        </div>
        <div className="task flex  flex-col m-3  rounded-md  border-2 border-grey-400 w-full">

          <div className="flex flex-row p-4">
            <img src={taskImg} alt="icon" className="object-contain" />
            <div className="rightTask ms-8">
              <h3 className="font-semibold text-xl ">Room library article written in java</h3>
              <div className="taskdate flex items-center">

                <GoCalendar className="text-teal-700 text-l me-3" />
                <p className="text-xs text-gray-400 font-light align-middle align-middle">3 days from now</p>
              </div>
            </div>
          </div>
          <div className="bg-pri11 rounded-b-lg p-4">
            <p className="text-gray-500 pt-2">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet. Pellentesque
            </p>
            {/* start task1 */}
            <div className="flex bg-cyan-100/50 p-3 my-3">
              <BsPeople className="text-teal-700 text-3xl mx-5" />
              <p className="font-semibold text-xl w-full">
                <span className="font-extrabold text-4xl mr-5">10</span>
                Mentor Managers assigned to this task
              </p>
              <button
                type="button"
                className="bg-pri3 py-.5 px-5 rounded-md text-white font-light font-sm mr-10"
              >
                View
              </button>
            </div>
            {/* end task 1 */}

            {/* start task 2 */}
            <div className="flex bg-cyan-100/50 p-3 my-3">
              <BsPerson className="text-teal-700 text-3xl mx-5" />
              <p className="font-semibold text-xl w-full">
                <span className="font-extrabold text-4xl mr-5">80</span>
                Mentors assigned to this task
              </p>
              <button
                type="button"
                className="bg-pri3 py-.5 px-5 rounded-md text-white font-light font-sm mr-10"
              >
                View
              </button>
            </div>
            {/* end task 2 */}

            {/* start task 3 */}
            <div className="flex bg-cyan-100/50 p-3 my-3">
              <HiOutlineDocumentText className="text-teal-700 text-3xl mx-5" />
              <p className="font-semibold text-xl w-full">
                <span className="font-extrabold text-3xl mr-5">45</span>
                Task reports
              </p>
              <button
                type="button"
                className="bg-pri3 py-.5 px-5 rounded-md text-white font-light font-sm mr-10"
              >
                View
              </button>
            </div>
            {/* end task  3 */}
            <div className="flex flex-row-reverse my-7">
              <button
                type="button"
                className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
              >
                Edit Task
              </button>
              <button
                type="button"
                className="bg-transparent py-2.5 px-10  text-red-600 font-meduim flex flex-row"
              >
                <HiOutlineTrash className="text-xl mr-2 font-xl" />
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tasks;
