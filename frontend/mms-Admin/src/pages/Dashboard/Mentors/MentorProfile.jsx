import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/avatar.svg';
import editIcon from '../../../assets/messages/edit.svg';
import flagIcon from '../../../assets/messages/flag.svg';
import filterIcon from '../../../assets/messages/filter.svg';
import emoji from '../../../assets/messages/emoji-smiley.svg';
import searchIcon from '../../../assets/messages/search.svg';
import attachmentClip from '../../../assets/messages/attachment-clip.svg';
import messageSentIcon from '../../../assets/messages/message-sent.svg';
import messageDeliveredIcon from '../../../assets/messages/message-delivered.svg';

const users = [
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
  {
    name: 'Allison Davis',
    dateAdded: 'Added 0ct. 10 2022',
  },
];
export default function MentorProfile() {
  const [sectionHeader, setSectionHeader] = useState('about');

  const handleSelectSection = (section) => {
    setSectionHeader(section);
  };
  return (
    <div className="w-full h-screen font-mukta relative">
      <section className="border border-white absolute top-0 left-0 right-0 bottom-0 w-[30%] relative">
        <div className="flex justify-between items-center absolute fixed top-0 h-12 w-full bg-white">
          <h1 className="text-2xl font-semibold text-black1">Mentors</h1>

          <div className="flex items-center justify-between">
            <img
              src={searchIcon}
              alt="search"
              className="h-[20px] cursor-pointer"
            />
            <img
              src={filterIcon}
              alt="filter"
              className="h-[20px] cursor-pointer pl-8"
            />
          </div>
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
                  {user.dateAdded}
                </p>
              </div>

              <h5 className="font-normal text-xs bg-pri3 py-2 px-6 text-white rounded-lg">
                View
              </h5>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-white absolute top-0 right-0 bottom-[100px] w-[70%] h-full pl-6">
        <section className="relative pb-[100px]">
          <section className="flex justify-between items-center mt-10">
            <div className="flex justify-between items-center">
              <img
                src={Avatar}
                alt="avatar"
                className="w-[90px] h-[90px] rounded-full mr-5"
              />

              <div>
                <h2 className="flex items-center font-semibold text-2xl text-black2">
                  Alison Davis
                  <img
                    src={flagIcon}
                    alt="img"
                    className="pl-8"
                  />
                </h2>
                <p className="flex items-center text-black5">
                  Mentor
                  <img
                    src={editIcon}
                    alt="img"
                    className="h-full pl-2"
                  />
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center h-12 bg-white">
              <Link to="/admin-dashboard/messages/broadcast-message">
                <button
                  type="button"
                  className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
                >
                  Send Message
                </button>
              </Link>

              <Link to="/admin-dashboard/mentors">
                <button
                  type="button"
                  className="bg-white border border-2xl border-pri3 py-2.5 px-10 text-pri3 rounded-xl font-semibold ml-7 hover:bg-pri3 hover:text-white "
                >
                  Close
                </button>
              </Link>
            </div>
          </section>

          <div className="border border-solid border-pri11 bg-pri11 rounded-[20px] h-full px-[18px] py-[30px] mt-6 relative">
            <div className="flex items-center justify-between">
              <h4
                className={
                  sectionHeader === 'about'
                    ? 'text-pri3 font-normal text-xl cursor-pointer'
                    : 'font-normal text-black5 text-xl cursor-pointer'
                }
                onClick={() => handleSelectSection('about')}
                aria-hidden
              >
                About
              </h4>
              <h4
                className={
                  sectionHeader === 'programs'
                    ? 'text-pri3 font-normal text-xl cursor-pointer'
                    : 'font-normal text-black5 text-xl cursor-pointer'
                }
                onClick={() => handleSelectSection('programs')}
                aria-hidden
              >
                Programs
              </h4>
              <h4
                className={
                  sectionHeader === 'tasks'
                    ? 'text-pri3 font-normal text-xl cursor-pointer'
                    : 'font-normal text-black5 text-xl cursor-pointer'
                }
                onClick={() => handleSelectSection('tasks')}
                aria-hidden
              >
                Tasks
              </h4>
              <h4
                className={
                  sectionHeader === 'certificates'
                    ? 'text-pri3 font-normal text-xl cursor-pointer'
                    : 'font-normal text-black5 text-xl cursor-pointer'
                }
                onClick={() => handleSelectSection('certificates')}
                aria-hidden
              >
                Certificates
              </h4>
            </div>

            <div className="border border-solid border-black9 rounded-xl py-10 px-8">
              {sectionHeader === 'about' && 'About section'}
              {sectionHeader === 'programs' && 'Program section'}
              {sectionHeader === 'tasks' && 'Tasks section'}
              {sectionHeader === 'certificates' && 'Certificate section'}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
