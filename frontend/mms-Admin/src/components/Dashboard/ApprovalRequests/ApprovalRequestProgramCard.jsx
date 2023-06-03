/* eslint-disable react/prop-types */
import React from 'react';

function ApprovalRequestProgramCard({ program }) {
  return (
    <div
      className="border border-slate-300 rounded-md mb-4 py-2 px-4 flex justify-between items-center"
      key={program.id}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src={program.url}
            alt=""
            className="w-[49px] h-[49px] object-cover object-top rounded-full"
          />
          <div className="ml-[24px]">
            <h4 className="font-[600] text-[18px] text-black2">
              {program.name}
            </h4>
          </div>
        </div>
      </div>

      <div className="h-[19px] w-[21px] bg-[#CC000E] text-[14px] text-black10 font-[400] flex items-center justify-center">
        {program.programs}
      </div>
    </div>
  );
}

export default ApprovalRequestProgramCard;
