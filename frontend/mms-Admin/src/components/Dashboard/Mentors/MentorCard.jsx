/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommentIcon, DeleteIcon } from '../../../assets/images';
import { mentorInfoOpen } from '../../../redux/features/mentorsSlice';
import MentorTag from './MentorTags';

function MentorCard({ grid, mentor }) {
  const dispatch = useDispatch();

  // redirecting
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const cardClick = async () => {
    await mentor;
    navigate('/admin-dashboard/mentors/mentor-info');
    if (from) navigate(from);

    dispatch(mentorInfoOpen(mentor));
  };
  return (
    <div
      className="w-full border-[1px] border-black9 rounded-[5px] px-10 py-2 flex items-center justify-between mb-[10px] hover:cursor-pointer hover:scale-95 duration-700"
      onClick={cardClick}
      aria-hidden="true"
    >
      <div className={` ${grid ? 'block' : 'flex items-center'}`}>
        <div className="flex items-center">
          <img
            src={mentor.url}
            alt=""
            className="w-[60px] h-[60px] object-cover object-top rounded-full"
          />
          <div className="ml-[24px]">
            <h4 className="font-[600] text-[20px] text-black2">
              {mentor.name}
            </h4>
            <p className="font-[400] text-[12px] text-black5 -my-1">
              {mentor.role}
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
