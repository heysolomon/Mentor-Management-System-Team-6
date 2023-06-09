/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Dropdown from '../../../assets/archive/dropdown.png';
import { Certificate, DocsIcon } from '../../../assets/images';

export default function CertificatesCard({ mentor }) {
  const [openSection, setOpenSection] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(1);

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
            <Certificate styling="w-[60px]" />
            <div className="ml-[24px]">
              <h4 className="font-[600] text-[16px] text-black2">
                {mentor.name}
              </h4>
              <h4 className="font-[600] text-[16px] text-black2">
                {mentor.role}
              </h4>
            </div>
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

          <div className="flex justify-between items-center mt-7">
            <p className="underline text-[18px] font-[600] text-pri1">
              Send Message
            </p>

            <div className="flex items-center">
              <button
                type="button"
                className="border-[1px] border-pri3 rounded-[10px] font-[600] text-[14px] text-[#023C40] hover:bg-pri10 duration-700 h-[47px] px-10"
              >
                Decline
              </button>
              <button
                type="submit"
                className="bg-pri3 rounded-[10px] font-[600] text-[14px] text-white hover:bg-pri2 duration-700 h-[47px] mr-[10px] px-10 ml-3"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
