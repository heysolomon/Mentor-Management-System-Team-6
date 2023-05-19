/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Dropdown from '../../../assets/archive/dropdown.png';
import { DocsIcon } from '../../../assets/images';
import MentorTag from '../Mentors/MentorTags';

export default function MentorManagerProgramCard({ mentor }) {
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

  const infos = [
    {
      id: 1,
      title: 'Technical Proficiency',
      detail: 'Java Script, Django, Mysql, Android',
    },
    {
      id: 2,
      title: 'Previous Programs',
      detail: 'GADS 2022, Google I/O Extended 2021',
    },
    {
      id: 3,
      title: 'Previous Programsy',
      detail: 'GADS 2022, Google I/O Extended 2021',
    },
    {
      id: 4,
      title: 'Availability to join a new program:',
      detail: 'Unavailable',
    },
    {
      id: 5,
      title: 'Program of interest',
      detail: 'Google Africa Scholarship Program',
    },
    {
      id: 6,
      title: 'Been a Mentor Before?',
      detail: 'Yes',
    },
    {
      id: 7,
      title: 'Years of Technical Experience:',
      detail: '3 years',
    },
  ];

  return (
    <div
      className=" border border-slate-300 rounded-md mb-4 p-2"
      key={mentor.id}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src={mentor.url}
              alt=""
              className="w-[49px] h-[49px] object-cover object-top rounded-full"
            />
            <div className="ml-[24px]">
              <h4 className="font-[600] text-[18px] text-black2">
                {mentor.name}
              </h4>

              <p className="font-[400] text-[12px] text-black5 -my-1">
                {mentor.role}
              </p>
            </div>
          </div>
          <div className="flex ml-10">
            <MentorTag styling="mr-5">PROGRAM ASST.</MentorTag>
            <MentorTag>MENTOR-GADS</MentorTag>
          </div>
        </div>

        {openSection && sectionIndex === mentor.id ? (
          <button type="button" onClick={() => handleCloseSection(mentor.id)}>
            <img
              src={Dropdown}
              alt="drop-up"
              className="h-[24px] w-[24px] rotate-180"
            />
          </button>
        ) : (
          <button type="button" onClick={() => handleOpenSection(mentor.id)}>
            <img src={Dropdown} alt="dropdown" className="h-[24px] w-[24px] " />
          </button>
        )}
      </div>

      {openSection && sectionIndex === mentor.id && (
        <div className="w-full mt-[15px] py-2 px-2">
          {/* bio section */}
          <div className="w-full mb-[20px]">
            <h3 className="text-[20px] font-[600] text-black2">Bio</h3>
            <div className="border-[1px] border-pri10 bg-pri11 text-black3 text-[16px] font-[400] p-[10px] mt-[5px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur eum laudantium blanditiis provident, quaerat rem
                adipisci minima nostrum fuga voluptatem, ipsam cum quibusdam
                ipsa debitis porro officia vitae. Porro, in.
              </p>
            </div>
          </div>
          <div className="h-full">
            {infos.map((item) => (
              <p
                className="text-black2 font-[600] text-[20px] mb-[17px]"
                key={item.id}
              >
                {item.title}
                {' '}
                <span className="text-[16px] font-[400] text-black5">
                  {item.detail}
                </span>
              </p>
            ))}
            <p className="text-black2 font-[600] text-[20px] mb-[17px]">
              Documents
              <br />
              <div className="flex">
                <span className="text-[16px] font-[400] text-black5 flex items-center mr-3">
                  <DocsIcon styling="mr-2" />
                  {' '}
                  My resume.doc
                </span>
                <span className="text-[16px] font-[400] text-black5 flex items-center mr-3">
                  <DocsIcon styling="mr-2" />
                  {' '}
                  Birth Cerificate.doc
                </span>
                <span className="text-[16px] font-[400] text-black5 flex items-center mr-3">
                  <DocsIcon styling="mr-2" />
                  {' '}
                  Java Lead.doc
                </span>
              </div>
            </p>
          </div>

          <div className="flex justify-start mt-5">
            {unAssign ? (
              <button
                type="submit"
                className="bg-pri3 rounded-[10px] font-[600] text-[14px] text-white hover:bg-pri2 duration-700 h-[47px] mr-[10px] px-5"
                onClick={() => setUnAssign(false)}
              >
                Assign to Mentor Manager
              </button>
            ) : (
              <button
                type="button"
                className="border-[1px] border-pri3 rounded-[10px] font-[600] text-[14px] text-[#023C40] hover:bg-pri10 duration-700 h-[47px] px-5"
                onClick={() => setUnAssign(true)}
              >
                Unassign from Mentor Manager
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
