import React, { useState } from 'react';
import './Tasks.css';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import taskImg from './task.png';
import styles from '../styles/dashboard.module.css';

function Tasks() {
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState(false);

  const search = () => {
    setChecked(true);
    const timer = setTimeout(() => {
      setChecked(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="flex flex-row ">
      <div className={`basis-2/5 flex m-5 flex-col overflow-y-auto pb-5 h-screen ${styles.scroll}`}>
        <div className="tasksHeader flex flex-row">
          <h1 className="font-[600] tasksH grow">Tasks</h1>
          {checked ? (
            <input
              type="text"
              className="focus:outline-none bg-transparent pl-4 w-full"
              placeholder="Search tasks"
              onKeyDown={search}
            />
          ) : <RiSearchLine className="text-teal-700 text-xl mx-2 cursor-pointer" onClick={search} />}

          <BsFilter className={`text-teal-700 text-2xl mx-2 cursor-pointer ${sort ? 'rotate-180' : ''}`} onClick={() => setSort(!sort)} />
        </div>
        {/* start tasks */}
        <div className="taskContainer m-5">

          {
          Array.from(Array(10)).map((i) => (
            <div className="task flex m-3 p-3 rounded-md  border-2 border-grey-400 w-full cursor-pointer" key={i}>
              <img src={taskImg} alt={i} className="object-contain  " />
              <div className="rightTask ms-8">
                <h3 className="font-semibold">Room Library article write...</h3>
                <div className="taskdate flex">

                  <GoCalendar className="text-teal-700 text-2xl me-3" />
                  <p className="text-xs text-gray-600 font-light align-middle pt-1">3 days from now</p>
                </div>

              </div>
            </div>

          ))
        }
        </div>
        {/* end tasks */}
      </div>
      <div className="basis-3/5">03</div>
    </div>
  );
}

export default Tasks;
