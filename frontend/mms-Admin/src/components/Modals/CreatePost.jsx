import React from 'react';
import { useDispatch } from 'react-redux';
import { ResetPasswordIllustration } from '../../assets/images';
import { closeModal } from '../../redux/features/Modals/modalSlice';
import Button from '../utilities/Buttons/Button';

function CreatePost() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
        Post Created Successfully
      </h2>
      <ResetPasswordIllustration styling="mt-[28px]" />
      <div className="flex justify-center">
        <Button
          width=" w-[50%] mt-[28px]"
          onClick={() => dispatch(closeModal())}
          aria-hidden="true"
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
