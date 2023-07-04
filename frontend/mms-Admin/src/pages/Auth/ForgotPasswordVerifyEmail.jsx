import React from 'react';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';
import { api } from '../../services/api';
import { resetPasswordFailure,
  resetPasswordStart,
  resetPasswordSuccess,
  setEmail } from '../../redux/features/passwordResetSlice';

function ForgotPasswordVerifyEmail() {
  const initialValues = {
    email: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });

  const dispatch = useDispatch();
  const { passwordReset } = useSelector((state) => state.resetPassword);

  // redirecting
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const verifyEmail = async (values) => {
    dispatch(resetPasswordStart());
    try {
      const email = await api.patch('/password_reset_token', {
        ...values,
      });

      if (
        email.data.message
        !== 'The reset token has been sent successfully to the email address provided if it exists'
      ) {
        dispatch(resetPasswordSuccess(email.data.message));
        // set the user email to redux
        dispatch(setEmail(values.email));
      } else {
        dispatch(resetPasswordFailure());
      }
      navigate('/forgot-password');
      if (from) navigate(from);
    } catch (err) {
      if (err) {
        dispatch(resetPasswordFailure());
        // console.log(err);
      }
    }
  };

  const submit = async (values) => {
    verifyEmail(values);
  };

  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-[65%] mx-auto">
        <h1 className="text-black1 text-[32px] font-[700] font-mukta">
          Forgot Password?
        </h1>
        <h2 className="text-black5 text-[24px] font-[400] font-mukta">
          Please enter your registered email to reset your password.
        </h2>
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
            tag="input"
            type="email"
            name="email"
            placeholder="Enter your email"
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
              'Login'
            )}
          </Button>
        </FormikForm>
      </div>
    </div>
  );
}

export default ForgotPasswordVerifyEmail;
