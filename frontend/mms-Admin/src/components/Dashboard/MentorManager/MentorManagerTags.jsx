/* eslint-disable react/prop-types */
import React from 'react';

function MentorManagerTag({ children, styling }) {
  return (
    <div
      className={`bg-pri10 rounded-[3px] px-2 flex items-center justify-center text-[12px] font-[400] text-black3 h-[20px] ${styling}`}
    >
      {children}
    </div>
  );
}

export default MentorManagerTag;
