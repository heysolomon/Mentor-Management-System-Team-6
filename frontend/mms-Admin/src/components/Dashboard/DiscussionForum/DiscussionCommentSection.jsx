import React from 'react';
import { AttachmentIcon, EmojiIcon } from '../../../assets/images';

function DiscussionCommentSection() {
  return (
    <div className="">
      <div className="mt-[41px] w-full bg-pri11 h-[120px] border-pri10 border-[1px] rounded-[5px] px-[20px] py-[16px] flex flex-col justify-between">
        <input
          type="text"
          className="w-full focus:outline-none bg-transparent py-[8px] placeholder:text-black5 text-black5 text-mukta font-[400] text-[16px]"
          placeholder="Write a comment..."
        />
        <div className="flex justify-between">
          <div className="flex">
            <button type="button" className="mr-[17px]">
              <EmojiIcon />
            </button>
            <button type="button">
              <AttachmentIcon />
            </button>
          </div>

          <button
            className="bg-pri3 h-[24px] flex items-center justify-center text-white duration-700 text-[12px] font-[400] hover:bg-pri2 py-2 rounded-[5px] px-3"
            type="button"
          >
            Post Comment
          </button>
        </div>
      </div>

      {/* comments */}
      <div className="border-black9 rounded-[10px] h-full p-[20px]">sjsjj</div>
    </div>
  );
}

export default DiscussionCommentSection;
