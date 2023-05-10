import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/avatar.svg';
import gridIcon from '../../../assets/messages/grid.svg';
import filterIcon from '../../../assets/messages/filter.svg';
import deleteIcon from '../../../assets/messages/delete.svg';
import searchIcon from '../../../assets/messages/search.svg';
import bulletListIcon from '../../../assets/messages/bullet-list.svg';
import messageIcon from '../../../assets/messages/message.svg';
import nextPageIcon from '../../../assets/messages/next-page.svg';
import prevPageIcon from '../../../assets/messages/prev-page.svg';
import nextMessageIcon from '../../../assets/messages/next-message.svg';
import prevMessageIcon from '../../../assets/messages/prev-message.svg';

export default function MentorsHome() {
  return (
    <div>
      <section className="flex justify-between items-center mb-6">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl text-black1">Mentors</h1>

          <img
            src={gridIcon}
            alt="grid icon"
            className="h-full cursor-pointer pl-4"
          />

          <img
            src={bulletListIcon}
            alt="bullet list icon"
            className="h-full cursor-pointer pl-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <Link to="broadcast-message">
            <button
              type="button"
              className="bg-white border border-2xl border-pri3 py-2.5 px-10 text-pri3 rounded-xl font-normal text-xs hover:bg-pri3 hover:text-white"
            >
              Send Broadcast Message
            </button>
          </Link>

          <Link to="/admin-dashboard/messages">
            <button
              type="button"
              className="bg-pri3 py-2.5 px-10 mx-5 text-white rounded-xl font-normal text-xs"
            >
              Add New Mentors
            </button>
          </Link>

          <div className="flex items-center">
            <img
              src={prevPageIcon}
              alt="prev page icon"
              className="h-full cursor-pointer"
            />
            <img
              src={prevMessageIcon}
              alt="prev page icon"
              className="h-full cursor-pointer pl-4 pr-2"
            />
            <h5 className="font-semibold text-base text-black2">
              1 - 10 of 20
            </h5>
            <img
              src={nextMessageIcon}
              alt="prev page icon"
              className="h-full cursor-pointer pr-4 pl-2"
            />
            <img
              src={nextPageIcon}
              alt="prev page icon"
              className="h-full cursor-pointer"
            />
          </div>
          <img
            src={searchIcon}
            alt="prev page icon"
            className="h-full cursor-pointer pl-8"
          />
          <img
            src={filterIcon}
            alt="prev page icon"
            className="h-full cursor-pointer pl-8"
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>

        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>

        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>

        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>

        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>

        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>

        <div className="flex justify-between items-center border border-black9 border-solid rounded-[5px] w-full mb-3">
          <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
            <img
              src={Avatar}
              alt="avatar"
              className="h-[50px]"
            />
            <div>
              <Link to="/admin-dashboard/mentors/mentor-profile">
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
              </Link>
              <h5 className="text-black5 font-bold text-xs">
                Program Assistant, Andela, She/her
              </h5>
            </div>

            <h4 className="bg-pri10 mx-5 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              program asst.
            </h4>
            <h4 className="bg-pri10 px-2 py-1 rounded-[3px] uppercase text-black3 font-bold text-xs">
              mentor-gads
            </h4>
          </section>

          <section className="flex items-center justify-between pr-12">
            <img
              src={messageIcon}
              alt="message icon"
              className="h-full cursor-pointer"
            />

            <img
              src={deleteIcon}
              alt="delete icon"
              className="h-full cursor-pointer pl-8"
            />
          </section>
        </div>
      </section>
    </div>
  );
}
