import React from 'react';
import { AttachmentIcon, EmojiIcon } from '../../../assets/images';
import DiscussionComment from './DiscussionComment';

function DiscussionCommentSection() {
  const comments = [
    {
      id: 1,
      name: 'Ibrahim Kekule',
      comment:
        'Found this so insightful. please how can i register to be a part of the program?',
      time: 'Just now',
    },
    {
      id: 2,
      name: 'Sarah Tasha',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.',
      time: '12 mins ago',
    },
    {
      id: 3,
      name: 'Ibrahim Kekule',
      comment:
        'Found this so insightful. please how can i register to be a part of the program?',
      time: '12 mins ago',
    },
    {
      id: 4,
      name: 'Sarah Tasha',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.',
      time: '25mins ago',
    },
  ];
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
              <EmojiIcon color="#808080" />
            </button>
            <button type="button">
              <AttachmentIcon color="#808080" />
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
      <div className="border-[1px] border-black9 rounded-[10px] h-full px-[20px] pb-[20px] min-h-[40px] w-full mt-[23px]">
        {comments.map((comment) => (
          <DiscussionComment
            key={comment.id}
            name={comment.name}
            body={comment.comment}
            time={comment.time}
          />
        ))}
      </div>
    </div>
  );
}

export default DiscussionCommentSection;
