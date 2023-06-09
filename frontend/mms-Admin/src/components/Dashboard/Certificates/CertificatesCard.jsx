/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Dropdown from '../../../assets/archive/dropdown.png';
import { Certificate } from '../../../assets/images';

export default function CertificatesCard({ certificate }) {
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

  return (
    <div
      className=" border border-slate-300 rounded-md mb-4 p-2"
      key={certificate.id}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="flex items-center">
            <Certificate styling="w-[60px]" />
            <div className="ml-[24px]">
              <h4 className="font-[600] text-[16px] text-black2">
                {certificate.name}
              </h4>
              <h4 className="font-[600] text-[16px] text-black2">
                {certificate.role}
              </h4>
            </div>
          </div>
        </div>

        {openSection && sectionIndex === certificate.id ? (
          <button
            type="button"
            onClick={() => handleCloseSection(certificate.id)}
          >
            <img
              src={Dropdown}
              alt="drop-up"
              className="h-[24px] w-[24px] rotate-180"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleOpenSection(certificate.id)}
          >
            <img src={Dropdown} alt="dropdown" className="h-[24px] w-[24px] " />
          </button>
        )}
      </div>

      {openSection && sectionIndex === certificate.id && (
        <div className="w-full mt-[15px] py-2 px-2">
          {/* bio section */}
          <div className="flex flex-col justify-center w-[80%] mx-auto">
            <Certificate styling="w-full" />

            <div className="flex items-center justify-end mt-7">
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
