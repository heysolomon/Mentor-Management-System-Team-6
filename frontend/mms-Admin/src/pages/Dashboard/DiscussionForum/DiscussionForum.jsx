import React from 'react';
import { useDispatch } from 'react-redux';
import { CircleAddIcon } from '../../../assets/images';
import DiscussionPost from '../../../components/Dashboard/DiscussionForum/DiscussionPost';
import ForumNewTopic from '../../../components/Modals/ForumNewTopic';
import { openModal } from '../../../redux/features/Modals/modalSlice';

function DiscussionForum() {
  const dispatch = useDispatch();

  const handleNewTopic = () => {
    dispatch(openModal(<ForumNewTopic />));
  };
  return (
    <div className="pb-2 h-full mb-[100px]">
      <div className="w-full bg-white top-[80px] mb-[33px]">
        <h2 className="text-[24px] font-[600] text-black1 mb-[20px]">
          Discussion Forum
        </h2>
        <div className="h-[48px] rounded-[5px] border-[1px] border-black9 flex justify-between items-center px-5">
          <p className="text-black5 font-[400] text-[20px]">Add new topic</p>
          <button
            type="button"
            className="hover:scale-90 duration-500"
            onClick={handleNewTopic}
          >
            <CircleAddIcon color="#058B94" />
          </button>
        </div>
      </div>

      <div className="h-full max-h-screen overflow-y-auto scroll pr-[10px] pb-[150px]">
        <DiscussionPost />
        <DiscussionPost />
        <DiscussionPost />
        <DiscussionPost />
      </div>
    </div>
  );
}

export default DiscussionForum;
