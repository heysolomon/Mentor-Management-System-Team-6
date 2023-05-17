import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../../../assets/avatar.svg';
import filterIcon from '../../../assets/messages/filter.svg';
import closeIcon from '../../../assets/messages/close.svg';
import searchIcon from '../../../assets/messages/search.svg';
import nextPageIcon from '../../../assets/messages/next-page.svg';
import prevPageIcon from '../../../assets/messages/prev-page.svg';
import nextMessageIcon from '../../../assets/messages/next-message.svg';
import prevMessageIcon from '../../../assets/messages/prev-message.svg';

export default function BrowsePeople() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <section className="flex justify-between items-center mb-6">
        <h1 className="font-semibold text-2xl text-black1">
          Select someone to start a conversation
        </h1>

        <div className="flex items-center justify-between">
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
            className="h-full cursor-pointer px-8"
          />
          <img
            src={closeIcon}
            alt="prev page icon"
            className="h-full cursor-pointer"
            aria-hidden
            onClick={() => navigate(-1)}
          />
        </div>
      </section>

      <section className="h-full overflow-y-auto scroll">
        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>

        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>

        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>

        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>

        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>

        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>

        <div className="border border-black9 border-solid rounded-[5px] w-full mb-3">
          <Link to="/admin-dashboard/messages/chats">
            <section className="flex items-center justify-between w-2/4 mb-0 py-2 pl-14 pr-12">
              <img
                src={Avatar}
                alt="avatar"
                className="h-[50px]"
              />
              <div>
                <h3 className="text-black2 font-semibold text-[22px]">
                  Alison Davis
                </h3>
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
          </Link>
        </div>
      </section>
    </div>
  );
}
