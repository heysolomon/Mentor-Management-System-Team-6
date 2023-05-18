import React from 'react';

function DiscussionPostLoading() {
  return (
    <div className="w-full mb-[28px] rounded-[10px] border-[1px] border-black9">
      <div className="w-full px-[20px] py-[24px] animate-pulse">
        {/* post header */}
        <div className="flex justify-between mb-[15px]">
          {/* user name and profile picture */}
          <div className="flex">
            {/* profile picture */}
            <div className="h-[45px] w-[45px] rounded-full bg-pri3" />

            <div className="ml-[16px]">
              {/* mentor name */}
              <div className="h-4 bg-pri3 rounded-lg w-[150px] mb-2" />
              {/* mentor title */}
              <div className="h-3 bg-pri3 rounded-lg w-24" />
            </div>
          </div>
          {/* more options */}
          <div className="h-2 bg-pri3 rounded-lg w-5" />
        </div>
        {/* post */}
        <div className="mb-[28px]">
          {/* post title */}
          <div className="h-3 w-[300px] rounded-lg bg-pri3" />
          {/* post body */}
          <div className="h-2 bg-pri3 w-full rounded-lg mt-2" />
          <div className="h-2 bg-pri3 w-full rounded-lg mt-1" />
          <div className="h-2 bg-pri3 w-full rounded-lg mt-1" />
        </div>
        {/* post footer */}
        <div className="flex justify-between items-center">
          {/* comment, bookmark and share section */}
          <div className="flex">
            <div className="mr-1 md:mr-2 h-5 w-5 rounded-full bg-pri3" />
            <div className="mx-1 md:mx-2 w-5 h-5 rounded-md bg-pri3" />
            <div className="mx-1 md:mx-2 w-5 h-5 rounded-md bg-pri3" />
          </div>
          <div className="flex items-center">
            <div className="mr-1 md:mr-2 h-5 w-5 rounded-full bg-pri3" />
            <div className="h-2 bg-pri3 rounded-lg ml-1 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionPostLoading;
