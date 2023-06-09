/* eslint-disable react/prop-types */
import React from 'react';
import { OptionsIcon } from '../../../assets/images';

function NotificationCards({ notification }) {
  return (
    <div
      className="border border-slate-300 rounded-md mb-4 py-2 px-4 flex justify-between items-center"
      key={notification.id}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src={notification.img}
            alt=""
            className="w-[49px] h-[49px] object-cover object-top rounded-full"
          />
          <div className="ml-[24px]">
            <h4 className="font-[600] text-[18px] text-black2">
              {notification.actor}
              {' '}
              <span className="font-[400]">{notification.action}</span>
              {' '}
              {notification.object}
            </h4>

            <p className="font-[400] text-[12px] text-black5 -my-1">
              {notification.date}
            </p>
          </div>
        </div>
      </div>

      <OptionsIcon />
    </div>
  );
}

export default NotificationCards;
