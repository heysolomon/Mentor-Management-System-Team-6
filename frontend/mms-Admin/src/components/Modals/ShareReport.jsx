import React from 'react';
import { useDispatch } from 'react-redux';
import { ShareReportImg } from '../../assets/images';
import { closeModal } from '../../redux/features/Modals/modalSlice';

function ShareReport() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
        Share report via email
      </h2>
      <ShareReportImg styling="mt-[28px] mb-3" />
      <div className="flex">

        <button
          onClick={() => dispatch(closeModal())}
          type="button"
          className="border-pri3 py-2.5 px-10 rounded-md text-teal-700 font-semibold border-teal-700 border-2 mx-1"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold mx-1"

        >
          Open Email App
        </button>
      </div>
    </div>
  );
}

export default ShareReport;
