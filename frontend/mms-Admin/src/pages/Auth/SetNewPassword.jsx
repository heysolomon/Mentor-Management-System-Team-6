import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { openModal } from '../../redux/features/Modals/modalSlice';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';
import PasswordReset from '../../components/Modals/PasswordReset';
import { resetPasswordFailure,
  resetPasswordStart,
  resetPasswordSuccess } from '../../redux/features/passwordResetSlice';
import { api } from '../../services/api';

function SetNewPassword() {
  const initialValues = {
    password: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    password: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('New password is required to continue')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        `Must Contain One Uppercase, One Lowercase,
        One Number and one special case Character`,
      ),
  });

  // redux state for the reset password success
  const dispatch = useDispatch();
  const { passwordReset, passwordResetToken, userEmail } = useSelector(
    (state) => state.resetPassword,
  );

  const resetPassword = async (values) => {
    const resetKey = 'resetToken';
    const resetValue = passwordResetToken;
    const resetEmailKey = 'email';
    const resetEmail = userEmail;
    const resetValues = {
      ...values,
      [resetKey]: resetValue,
      [resetEmailKey]: resetEmail,
    };
    dispatch(resetPasswordStart());
    try {
      await api.patch('/password_reset', {
        ...resetValues,
      });
      dispatch(resetPasswordSuccess());
      // open a modal after success
      dispatch(openModal(<PasswordReset />));
    } catch (err) {
      if (err) {
        dispatch(resetPasswordFailure());
        // console.log(err);
      }
    }
  };

  const submit = async (values) => {
    resetPassword(values);
  };

  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-[65%] mx-auto">
        <h1 className="text-black1 text-[32px] font-[700] font-mukta">
          Set new password
        </h1>
        {/* This is a formik form component for wrapping the input fields
         ** you check the components/FormikForm to see the component
         ** it accepts the initialValues and validate objects as props into the component
         */}
        <FormikForm
          initialValues={initialValues}
          validationSchema={validate}
          submit={submit}
          className="mt-[20px]"
        >
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <Button width="w-full mt-[28px]">
            {passwordReset ? (
              <SpinnerCircular
                color="#F7FEFF"
                className="mr-2"
                thickness={250}
                size={20}
              />
            ) : (
              'Reset Password'
            )}
          </Button>
        </FormikForm>
        {/* new user link to signup form */}
        <p className="font-[400] text-black5 font-mukta text-[16px] mt-[20px]">
          *Your new password must be different from previously used password.
        </p>
      </div>
    </div>
  );
}

export default SetNewPassword;
