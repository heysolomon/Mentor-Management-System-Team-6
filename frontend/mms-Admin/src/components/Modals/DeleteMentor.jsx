import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteImage } from '../../assets/images';
import { closeModal } from '../../redux/features/Modals/modalSlice';

function DeleteMentor() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
        Mentor Deleted Successfully
      </h2>
      <DeleteImage styling="mt-[28px]" />
      <div className="flex">
        <button
          type="button"
          className="border-pri3 py-2.5 px-10 rounded-md text-teal-700 font-semibold border-teal-700 border-2 mx-1"
          onClick={() => dispatch(closeModal())}
        >
          Undo
        </button>
        <button
          onClick={() => dispatch(closeModal())}
          type="button"
          className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold mx-1"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default DeleteMentor;
