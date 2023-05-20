/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Time from '../../../assets/archive/time.svg';
import Google from '../../../assets/archive/google.svg';
import Schedule from '../../../assets/archive/schedule.svg';
import Dropdown from '../../../assets/archive/dropdown.png';
import { ReportIcon } from '../../../assets/images';

export default function MentorManagerProgramCard({ program }) {
  const [openSection, setOpenSection] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(1);
  const [unAssign, setUnAssign] = useState(false);

  const handleOpenSection = (id) => {
    setSectionIndex(id);
    setOpenSection(true);
  };

  const handleCloseSection = (id) => {
    setSectionIndex(id);
    setOpenSection(false);
  };

  return (
    <div
      className=" border border-slate-300 rounded-md mb-4 p-2"
      key={program.id}
    >
      <div className="flex items-center justify-between w-full">
        <img src={Google} alt="add img" className="h-[50px] w-[50px]" />

        <div className="grow mx-6">
          <h1 className="text-xl font-semibold text-black2">
            {program.programTitle}
          </h1>
          <section className="flex items-center justify-between w-[40%]">
            <div className="flex items-center">
              <img src={Schedule} alt="schedule" />
              <p className="ml-3 font-normal text-xs text-black5">
                Dec, 12, 2023
              </p>
            </div>

            <div className="flex items-center">
              <img src={Time} alt="time" />
              <p className="ml-3 font-normal text-xs text-black5">8:00 pm</p>
            </div>
          </section>
        </div>

        {openSection && sectionIndex === program.id ? (
          <button type="button" onClick={() => handleCloseSection(program.id)}>
            <img
              src={Dropdown}
              alt="drop-up"
              className="h-[24px] w-[24px] rotate-180"
            />
          </button>
        ) : (
          <button type="button" onClick={() => handleOpenSection(program.id)}>
            <img src={Dropdown} alt="dropdown" className="h-[24px] w-[24px] " />
          </button>
        )}
      </div>

      {openSection && sectionIndex === program.id && (
        <div className="w-full mt-[15px] py-2 px-2">
          <h3 className="font-[600] text-[20px] text-black2">About:</h3>
          <p className="font-normal text-[16px] text-black5 mt-[5px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu
          </p>

          <div className="bg-pri10 flex justify-between items-center px-5 py-1 mt-[20px]">
            <div className="flex items-center">
              <ReportIcon styling="w-[24px]" color="#058B94" />
              <div className="font-[700] text-[32px] text-black2 ml-5 flex items-center">
                40
                {' '}
                <span className="text-[20px] font-[600] ml-3">
                  Program Reports
                </span>
                <div className="w-[20px] h-[20px] bg-sec3 rounded-full text-white font-[600] flex items-center justify-center text-[18px] ml-3">
                  3
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri3 text-pri11 text-[12px] hover:bg-pri2"
            >
              View
            </button>
          </div>

          <div className="flex justify-end mt-5">
            {unAssign ? (
              <button
                type="submit"
                className="bg-pri3 rounded-[10px] font-[600] text-[14px] text-white hover:bg-pri2 duration-700 h-[47px] mr-[10px] px-5"
                onClick={() => setUnAssign(false)}
              >
                Assign to Program
              </button>
            ) : (
              <button
                type="button"
                className="border-[1px] border-pri3 rounded-[10px] font-[600] text-[14px] text-[#023C40] hover:bg-pri10 duration-700 h-[47px] px-5"
                onClick={() => setUnAssign(true)}
              >
                Unassign from Program
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
