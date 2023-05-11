/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { mentorInfoOpen } from '../../../redux/features/mentorsSlice';

function MentorCardInfo({ mentor }) {
  const dispatch = useDispatch();
  return (
    <div className="border-[1px] rounded-[5px] border-black10 flex justify-between items-center mb-[10px] py-[10px] px-[20px]">
      <div className="flex items-center">
        <img
          src={mentor.url}
          alt=""
          className="w-[45px] h-[45px] object-cover object-top rounded-full"
        />

        <div className="ml-[15px]">
          <h2 className="font-[600] flex items-center text-[16px] text-black2">
            {mentor.name}
          </h2>
          <p className="font-[400] text-[12px] text-black3 -my-1 flex items-center">
            {mentor.dateAdded}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri3 text-pri11 text-[12px] hover:bg-pri2"
        onClick={() => dispatch(mentorInfoOpen(mentor))}
      >
        View
      </button>
    </div>
  );
}

export default MentorCardInfo;
