import React, { useState } from 'react';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';
import { api } from '../../services/api';

function ForgotPasswordVerifyEmail() {
  const initialValues = {
    email: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  // redirecting
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const verifyEmail = async (values) => {
    // dispatch(loginStart());
    try {
      const email = await api.patch(
        '/password_reset_token',
        {
          ...values,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(email);
      // dispatch(loginSuccess(email.data));
      // setMessage(user.data.message);
      setTimeout(() => {
        navigate('/forgot-password');
        if (from) navigate(from);
      }, 1000);
    } catch (err) {
      if (err) {
        // dispatch(loginFailure());
        console.log(err);
        // setMessage(err.response.data.message);
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
            type="email"
            name="email"
            placeholder="Enter your email"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <Button width="w-full mt-[28px]">Done</Button>
        </FormikForm>
      </div>
    </div>
  );
}

export default ForgotPasswordVerifyEmail;
