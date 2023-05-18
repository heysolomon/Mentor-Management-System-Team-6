/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment/moment';
import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/all';
import { ClockIcon,
  CommentIcon,
  OptionsIcon,
  ShareIcon,
  UserAvatar } from '../../../assets/images';
import PostDropdown from '../../utilities/PostDropdown';
import DiscussionCommentSection from './DiscussionCommentSection';

function DiscussionPost({ post }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [isOptionClicked, setIsOptionClicked] = useState(false);

  const handleClick = () => {
    setIsOptionClicked(true);
  };

  // for the timestamp for post as to when they were posted
  const timestamp = post.createdAt;
  const formattedTime = moment(timestamp).fromNow();

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

          {!isOptionClicked ? (
            <button type="button" onClick={handleClick}>
              <OptionsIcon />
            </button>
          ) : (
            <PostDropdown post={post} setIsOptionClicked={setIsOptionClicked} />
          )}
        </div>
        {/* post */}
        <div className="mb-[28px]">
          {/* post title */}
          <h3 className="text-black2 font-[400] text-[20px] mb-[7px]">
            {post.title}
          </h3>
          {/* post body */}
          <p className="font-[400] text-[16px] text-black5">{post.content}</p>
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
            <p className="text-[12px] font-[400] text-black5 ml-1">
              {formattedTime}
            </p>
          </div>
        </div>
      </div>
      {commentOpen && <DiscussionCommentSection />}
    </div>
  );
}

export default DiscussionPost;
