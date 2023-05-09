/* eslint-disable react/prop-types */
import React from 'react';
import { CommentIcon, DeleteIcon, MentorAvatar } from '../../../assets/images';
import MentorTag from './MentorTags';

function MentorCard({ grid }) {
  return (
    <div className="w-full border-[1px] border-black9 rounded-[5px] px-10 py-2 flex items-center justify-between mb-[10px]">
      <div className={` ${grid ? 'block' : 'flex items-center'}`}>
        <div className="flex items-center">
          <MentorAvatar />
          <div className="ml-[24px]">
            <h4 className="font-[600] text-[20px] text-black2">Alison Davis</h4>
            <p className="font-[400] text-[12px] text-black5 -my-1">
              Program Assistant, Andela, She/her
            </p>
            <div className={`${!grid ? 'hidden' : 'flex mt-2'}`}>
              <MentorTag styling="mr-3">PROGRAM ASST.</MentorTag>
              <MentorTag>MENTOR-GADS</MentorTag>
            </div>
          </div>
        </div>
        <div className={`${grid ? 'hidden' : 'flex ml-10'}`}>
          <MentorTag styling="mr-5">PROGRAM ASST.</MentorTag>
          <MentorTag>MENTOR-GADS</MentorTag>
        </div>
      </div>

      <div
        className={`${
          grid ? 'flex flex-col justify-center items-center h-full' : 'flex'
        }`}
      >
        <button type="button" className={`${grid && 'mb-3'}`}>
          <CommentIcon />
        </button>

        <button type="button" className={`${!grid && 'ml-3'}`}>
          <DeleteIcon color="#058B94" />
        </button>
      </div>
    </div>
  );
}

export default MentorCard;
