import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import reportImg from './report.png';
import taskImg from './task.png';
import ShareReport from '../../../components/Modals/ShareReport';
import DownloadReport from '../../../components/Modals/DownloadReport';

function Reports() {
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState(false);
  const [active, setActive] = useState(true);

  const dispatch = useDispatch();

  const search = () => {
    setChecked(true);
  };

  const handleshare = () => {
    dispatch(openModal(<ShareReport />));
  };
  const handleDownload = () => {
    dispatch(openModal(<DownloadReport />));
  };
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div
        className="max-lg:basis-1/1 basis-1/3 flex m-5 flex-col  pb-5 h-100 w-full lg:w-100 scroll"
      >
        <div className="flex bg-pri3 m-1 p-1 rounded mb-2">
          <div
            className={`basis-1/2  text-center rounded ${active ? 'bg-white text-pri3 font-bold' : 'text-white'}  p-1 cursor-pointer`}
            onClick={() => setActive(true)}
            role="button"
            onKeyDown={() => setActive(true)}
            tabIndex={0}
          >
            Program Reports
          </div>
          <div
            className={`basis-1/2 ${active ? 'text-white' : 'bg-white text-pri3'} text-center font-bold rounded p-1 cursor-pointer`}
            onClick={() => setActive(false)}
            role="button"
            onKeyDown={() => setActive(false)}
            tabIndex={0}
          >
            Task Reports
          </div>

        </div>
        <div className="tasksHeader flex flex-row mt-4">
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
              <div className="font-[600] tasksH grow">

                <button type="button" className="inline-flex w-full justify-starttext-gray700 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 " id="menu-button" aria-expanded="true" aria-haspopup="true">
                  All Reports
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
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
            </>
          )}
        </div>
        {/* start tasks */}
        <div className="taskContainer me-5">
          {Array.from(Array(10)).map((i) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              className="task flex m-3 p-3 rounded-md  border-2 border-grey-400 w-full cursor-pointer"
              key={i}
            >
              <img src={active ? reportImg : taskImg} alt={i} className="object-contain" />
              <div className="rightTask ms-8">
                <h3 className="font-semibold">Google Africa Scholarship</h3>
                <div className="taskdate flex">
                  <p className="text-xs text-gray-600 font-light align-middle">
                    By Ibrahim Kabir -  19th - 25th Oct 22
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end tasks */}
      </div>

      <div className="max-lg:basis-1/1 basis-2/3 h-100">
        <div className="flex flex-row-reverse" />
        <div className="pr-[10px] pb-20 h-full overflow-y-auto scroll">
          <div className="task flex  flex-col  rounded-md  border-2 border-grey-400 w-full">
            <div className="flex flex-row p-4">
              <img src={active ? reportImg : taskImg} alt="icon" className="object-contain" />
              <div className="rightTask ms-8 grow">
                <h3 className="font-semibold text-xl ">
                  Google Africa Scholarship
                </h3>
                <div className="taskdate flex items-center">
                  <p className="text-xs text-gray-400 font-light align-middle">
                    By Ibrahim Kabir -  19th - 25th Oct 22
                  </p>
                </div>
              </div>
              <AiOutlineClose
                className="text-teal-700 text-md mt-1 mx-2 cursor-pointer"
              />
            </div>
            <div className="bg-pri11 rounded-b-lg p-4">
              <h2 className="font-black font-xl">Major Achievements</h2>
              <p className="text-gray-500 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
                imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                Pellentesque commodo lacus at sodales
                sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
              <h2 className="font-black font-xl mt-5">Major  Blockers</h2>
              <p className="text-gray-500 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
                imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                Pellentesque commodo lacus at sodales
                sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
              <h2 className="font-black font-xl mt-5">Major Recommendations</h2>
              <p className="text-gray-500 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
                imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                Pellentesque commodo lacus at sodales
                sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
              <div className="flex flex-row-reverse justify-between my-7">
                <button
                  className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
                  type="button"
                  onClick={handleDownload}
                  onKeyDown={handleDownload}
                  tabIndex={0}

                >

                  Download
                </button>
                <button
                  type="button"
                  className="bg-white border-teal-700 border-2 rounded py-2.5 px-10  text-pri3 font-meduim"
                  onClick={handleshare}
                  onKeyDown={handleshare}
                  tabIndex={0}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
