/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Dropdown from '../../../assets/archive/dropdown.png';
import { Certificate } from '../../../assets/images';
import DropdownCertificateDownload from '../../utilities/DropdownCertificateDownload';

export default function MertorCertificateCard({ task }) {
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

  const options = [
    {
      value: 'pdf',
      label: 'PDF',
    },
    {
      value: 'jpeg',
      label: 'JPEG',
    },
  ];
  return (
    <div className=" border border-slate-300 rounded-md mb-4 p-2" key={task.id}>
      <div className="flex items-center justify-between w-full">
        <Certificate styling="w-[50px]" />

        <div className="grow mx-6">
          <h1 className="text-xl font-semibold text-black2">
            {task.tasksTitle}
          </h1>
        </div>

        {openSection && sectionIndex === task.id ? (
          <button type="button" onClick={() => handleCloseSection(task.id)}>
            <img
              src={Dropdown}
              alt="drop-up"
              className="h-[24px] w-[24px] rotate-180"
            />
          </button>
        ) : (
          <button type="button" onClick={() => handleOpenSection(task.id)}>
            <img src={Dropdown} alt="dropdown" className="h-[24px] w-[24px] " />
          </button>
        )}
      </div>

      {openSection && sectionIndex === task.id && (
        <div className="w-full mt-[15px] py-2 px-2 border-[1px] border-black9 bg-pri11 pb-10">
          <div className="flex justify-center">
            <Certificate styling="w-[80%]" />
          </div>

          <div className="flex justify-center mt-5 items-center">
            <div className="flex items-center">
              <p className="text-[16px] font-[400] text-black2 mr-2">Download as</p>

              <DropdownCertificateDownload
                options={options}
                placeHolder="PDF"
              />
            </div>
            <button
              type="submit"
              className="bg-pri3 rounded-[10px] font-[600] text-[14px] text-white hover:bg-pri2 duration-700 h-[47px] ml-[15px] px-5"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
