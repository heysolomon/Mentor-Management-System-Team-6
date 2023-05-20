/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { OptionsIcon } from '../../../assets/images';

function DiscussionComment({ comment }) {
  const timestamp = comment.createdAt;
  const formattedTime = moment(timestamp).fromNow();
  return (
    <div className="bg-pri11 py-[14px] px-[20px] mt-[20px]">
      <div className="flex justify-between">
        <h4 className="font-[600] text-[16px] text-black2">Ibrahim Kekule</h4>
        <button type="button">
          <OptionsIcon />
        </button>
      </div>
      <p className="font-[400] text-[12px] text-black5 mt-2">
        {comment.content}
      </p>
      <div className="flex justify-end">
        <p className="font-[400] text-[12px] text-black5">{formattedTime}</p>
      </div>
    </div>
  );
}

export default DiscussionComment;
