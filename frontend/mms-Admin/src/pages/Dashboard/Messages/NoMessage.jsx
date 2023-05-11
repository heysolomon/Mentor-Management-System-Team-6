import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/messages/offline.svg';

export default function NoMessage() {
  return (
    <div>
      <section className="flex items-center justify-end w-full">
        <Link to="broadcast-message">
          <button
            type="button"
            className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
          >
            Send Broadcast Message
          </button>
        </Link>
      </section>

      <section className="flex flex-col justify-center items-center w-full h-[80vh]">
        <img
          src={img}
          alt="no messages img"
        />
        <h1 className="text-black1 font-semibold text-xl mt-3">
          No Messages, Yet
        </h1>
        <p className="text-black6 text-base mb-8">
          No messages in your chatbox, yet. Start chatting with other users
        </p>
        <Link to="browse-people">
          <button
            type="button"
            className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
          >
            Browse People
          </button>
        </Link>
      </section>
    </div>
  );
}
