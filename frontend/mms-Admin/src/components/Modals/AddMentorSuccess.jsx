import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/features/Modals/modalSlice';

function AddMentorSuccess() {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full px-10">
      <h2 className="font-[600] text-[24px] text-center">Add Mentor</h2>

      <p className="font-[600] text-[24px] text-center text-black2 mt-10">
        An invitation has been sent to samkebede@gmail.com successfully
      </p>

      <div className="grid grid-cols-1 gap-x-[28px] w-[20%] mx-auto h-[50px] mt-[40px]">
        <button
          type="button"
          className="bg-pri3 rounded-[10px] font-[600] text-[18px] text-white hover:bg-pri2 duration-700"
          onClick={() => dispatch(closeModal(<AddMentorSuccess />))}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default AddMentorSuccess;
