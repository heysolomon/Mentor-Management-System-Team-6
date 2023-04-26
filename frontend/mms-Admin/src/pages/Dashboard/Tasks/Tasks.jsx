import React, { useState } from 'react';
import './Tasks.css';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { GoCalendar } from 'react-icons/go';
import taskImg from './task.png';
import taskIcon1 from './taskIcon1.png';
import taskIcon2 from './taskIcon2.png';
import taskIcon3 from './taskIcon3.png';
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
              <img src={taskImg} alt={i} className="object-contain  " />
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
            type="submit"
            className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
          >
            Create New Task
          </button>
        </div>
        <div className="task flex  flex-col m-3  rounded-md  border-2 border-grey-400 w-full">

          <div className="flex flex-row p-4">
            <img src={taskImg} alt="icon" className="object-contain" />
            <div className="rightTask ms-8">
              <h3 className="font-semibold ">Room library article written in java</h3>
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

            <div className="flex" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tasks;
