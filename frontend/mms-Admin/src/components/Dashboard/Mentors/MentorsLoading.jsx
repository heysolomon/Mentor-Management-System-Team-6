import React from 'react';

function MentorsLoading() {
  return (
    <div className="border-[1px] border-black9 rounded-[5px] p-4 w-full">
      <div className="animate-pulse flex px-10">
        <div className="rounded-full bg-pri2 h-[50px] w-[50px] mr-7" />
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-pri2 rounded" />
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-pri2 rounded col-span-2" />
              <div className="h-2 bg-pri2 rounded col-span-1" />
            </div>
            <div className="h-2 bg-pri2 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorsLoading;
