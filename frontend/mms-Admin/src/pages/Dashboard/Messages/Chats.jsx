import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/avatar.svg';
import messageSentIcon from '../../../assets/messages/message-sent.svg';
import messageDeliveredIcon from '../../../assets/messages/message-delivered.svg';
import messageLoadingIcon from '../../../assets/messages/message-loading.svg';
import emoji from '../../../assets/messages/emoji-smiley.svg';
import searchIcon from '../../../assets/messages/search.svg';
import attachmentClip from '../../../assets/messages/attachment-clip.svg';

const users = [
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
  {
    name: 'Allison Davis',
    message: 'Can we go ahead to join the ...',
    time: '30min',
  },
];

export default function Chats() {
  return (
    <div className="w-full h-screen font-mukta relative">
      <section className="border border-white absolute top-0 left-0 right-0 bottom-0 w-[30%] relative">
        <div className="flex justify-between items-center absolute fixed top-0 h-12 w-full bg-white">
          <h1 className="text-2xl font-semibold text-black1">Chats</h1>
          <img
            src={searchIcon}
            alt="search"
            className="h-[20px] cursor-pointer"
          />
        </div>

        <div className="scroll overflow-y-auto mt-[71px]">
          {users.map((user) => (
            <div
              key={user.name}
              className="flex items-center justify-between border border-solid border-black9 bg-pri11 p-[15px] rounded-md mb-2 cursor-pointer"
            >
              <img
                src={Avatar}
                alt="avatar"
              />
              <div className="grow ml-2 mr-4">
                <h4 className="font-semibold text-base text-black1">
                  {user.name}
                </h4>
                <p className="font-normal text-xs text-black3">
                  {user.message}
                </p>
              </div>

              <h5 className="font-normal text-xs text-black3">{user.time}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-white absolute top-0 right-0 bottom-[100px] w-[70%] h-full pl-6">
        <section className="relative pb-[100px]">
          <div className="flex justify-end h-12 bg-white w-full">
            <Link to="/admin-dashboard/messages/broadcast-message">
              <button
                type="button"
                className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
              >
                Send Broadcast Message
              </button>
            </Link>
          </div>

          <div className="border border-solid border-pri11 bg-pri11 rounded-[20px] h-full px-[18px] py-[30px] mt-6 relative">
            <div className="mb-32">
              <div className="flex items-center mb-10 max-w-[60%]">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="h-[43px] w-[43px] rounded-full mr-8"
                />
                <div className="bg-pri10 px-8 py-5 border-pri10 rounded-[10px]">
                  <h4 className="font-semibold text-black1 font-sm text-base">
                    Hello Kabiru, trust you are well?
                  </h4>
                  <p>6:00 PM</p>
                </div>
              </div>

              <div className="flex justify-end items-center mb-10">
                <div className="bg-white px-8 py-5 border-pri10 rounded-[10px] min-w-[45%] max-w-[60%]">
                  <h4 className="font-semibold text-black1 font-sm text-base">
                    Hello Kabiru, trust you are well?
                  </h4>

                  <div className="flex items-center justify-between">
                    <p>6:00 PM</p>
                    <img
                      src={messageDeliveredIcon}
                      alt="message delivered"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-10 max-w-[60%]">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="h-[43px] w-[43px] rounded-full mr-8"
                />
                <div className="bg-pri10 px-8 py-5 border-pri10 rounded-[10px]">
                  <h4 className="font-semibold text-black1 font-sm text-base">
                    Hello Kabiru, trust you are well?
                  </h4>
                  <p>6:00 PM</p>
                </div>
              </div>

              <div className="flex justify-end items-center mb-10">
                <div className="bg-white px-8 py-5 border-pri10 rounded-[10px] min-w-[45%] max-w-[60%]">
                  <h4 className="font-semibold text-black1 font-sm text-base">
                    Hello Kabiru, trust you are well?
                  </h4>

                  <div className="flex items-center justify-between">
                    <p>9:00 PM</p>
                    <img
                      src={messageSentIcon}
                      alt="message sent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <section className="flex items-center mt-6 absolute bottom-10 right-[30px] left-[30px]">
              <img
                src={emoji}
                alt="emoji"
                className="cursor-pointer"
              />
              <img
                src={attachmentClip}
                alt="attachment"
                className="cursor-pointer px-4"
              />
              <div className="bg-white rounded-[10px] py-[10px] px-5 w-full">
                <input
                  type="text"
                  name="message"
                  placeholder="Type a message..."
                  className="w-full bg-white border-l-2 px-[12px] py-[8px] focus:outline-none focus:border-pri10 focus:ring-pri10 focus:ring-1 placeholder:text-black5 placeholder:font-normal placeholder:text-base"
                />
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}
