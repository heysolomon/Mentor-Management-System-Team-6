import React from 'react';
import { CircleAddIcon } from '../../../assets/images';
import DiscussionPost from '../../../components/Dashboard/DiscussionForum/DiscussionPost';

function DiscussionForum() {
  return (
    <div className="pb-2">
      <h2 className="text-[24px] font-[600] text-black1 mb-[20px]">
        Discussion Forum
      </h2>
      <div className="h-[48px] rounded-[5px] border-[1px] border-black9 flex justify-between items-center px-5 mb-[33px]">
        <p className="text-black5 font-[400] text-[20px]">Add new topic</p>
        <button type="button">
          <CircleAddIcon color="#058B94" />
        </button>
      </div>

      <div className="">
        <DiscussionPost />
        <DiscussionPost />
        <DiscussionPost />
        <DiscussionPost />
      </div>
    </div>
  );
}

export default DiscussionForum;
