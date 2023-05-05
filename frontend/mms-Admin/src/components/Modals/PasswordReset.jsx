import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ResetPasswordIllustration } from '../../assets/images';
import { closeModal } from '../../redux/features/Modals/modalSlice';
import Button from '../utilities/Buttons/Button';

function PasswordReset() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
        Password Reset Successful
      </h2>
      <ResetPasswordIllustration styling="mt-[28px]" />

      <Link to="/" className="w-[50%] md:w-[25%]">
        <Button
          width="w-full mt-[28px]"
          onClick={() => dispatch(closeModal())}
          aria-hidden="true"
        >
          Done
        </Button>
      </Link>
    </div>
  );
}

export default PasswordReset;
