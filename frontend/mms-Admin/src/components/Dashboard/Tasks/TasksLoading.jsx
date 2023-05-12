import React from 'react';

function TaskLoading() {
  return (
    <div className="task flex my-3 p-3 rounded-md  border-2 border-grey-400 w-full cursor-pointer">
      <div className="animate-pulse flex">
        <div className="w-[40px] h-[40px] bg-pri2 rounded-lg" />
        <div className="rightTask ms-8">
          <div className="h-2 bg-pri2 w-[60%] rounded-lg" />
          <div className="flex items-center w-full mt-2">
            <div className="me-3 w-[10px] h-[10px] bg-pri2 rounded-lg" />
            <div className="rounded-lg h-2 bg-pri2 w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskLoading;
