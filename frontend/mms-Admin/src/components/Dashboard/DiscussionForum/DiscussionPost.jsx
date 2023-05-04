import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { ClockIcon,
  CommentIcon,
  OptionsIcon,
  ShareIcon,
  UserAvatar } from '../../../assets/images';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import EditPost from '../../Modals/EditPost';
import DiscussionCommentSection from './DiscussionCommentSection';

function DiscussionPost() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  // const [isOptionOpen, setIsOptionOpen] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(openModal(<EditPost />));
  };
  return (
    <div className="w-full mb-[28px]">
      <div className="w-full rounded-[10px] px-[20px] py-[24px] border-[1px] border-black9">
        {/* post header */}
        <div className="flex justify-between mb-[15px]">
          {/* user name and profile picture */}
          <div className="flex">
            {/* profile picture */}
            <UserAvatar />
            {/* name */}
            <div className="ml-[16px]">
              <h3 className="font-[600] text-[20px] text-black2">
                Alison Davis
              </h3>
              <p className="text-[12px] font-[400] text-black5">
                Mentor Manager
              </p>
            </div>
          </div>
          {/* more options */}

          <button type="button" onClick={handleEdit}>
            <OptionsIcon />
          </button>
        </div>
        {/* post */}
        <div className="mb-[28px]">
          {/* post title */}
          <h3 className="text-black2 font-[400] text-[20px] mb-[7px]">
            The New MMS Discussion Forum Guidelines and Regulations
          </h3>
          {/* post body */}
          <p className="font-[400] text-[16px] text-black5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enilf.
          </p>
        </div>
        {/* post footer */}
        <div className="flex justify-between items-center">
          {/* comment, bookmark and share section */}
          <div className="flex">
            <button
              type="button"
              className="mr-1 md:mr-2"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              <CommentIcon />
            </button>
            <button
              type="button"
              className="mx-1 md:mx-2"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              {isBookmarked ? (
                <BsFillBookmarkFill fontSize={20} className="text-pri3" />
              ) : (
                <BsBookmark
                  strokeWidth={0.65}
                  fontSize={20}
                  className="text-pri3"
                />
              )}
            </button>
            <button type="button" className="mx-1 md:mx-2">
              <ShareIcon />
            </button>
          </div>
          <div className="flex items-center">
            <ClockIcon />
            <p className="text-[12px] font-[400] text-black5 ml-1">5hr ago</p>
          </div>
        </div>
      </div>
      {commentOpen && <DiscussionCommentSection />}
    </div>
  );
}

export default DiscussionPost;
