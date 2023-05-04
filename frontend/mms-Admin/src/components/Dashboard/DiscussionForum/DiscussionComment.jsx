/* eslint-disable react/prop-types */
import React from 'react';
import { OptionsIcon } from '../../../assets/images';

function DiscussionComment({ name, body, time }) {
  return (
    <div className="bg-pri11 py-[14px] px-[20px] mt-[20px]">
      <div className="flex justify-between">
        <h4 className="font-[600] text-[16px] text-black2">{name}</h4>
        <button type="button">
          <OptionsIcon />
        </button>
      </div>
      <p className="font-[400] text-[12px] text-black5 mt-2">{body}</p>
      <div className="flex justify-end">
        <p className="font-[400] text-[12px] text-black5">{time}</p>
      </div>
    </div>
  );
}

export default DiscussionComment;
