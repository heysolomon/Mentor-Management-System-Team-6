import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';

function ForgotPasswordVerifyEmail() {
  const initialValues = {
    email: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });

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
          className="mt-[20px]"
        >
          <InputField
            type="email"
            name="email"
            placeholder="Enter your email"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <Link to="/forgot-password">
            <Button width="w-full mt-[28px]">Done</Button>
          </Link>
        </FormikForm>
      </div>
    </div>
  );
}

export default ForgotPasswordVerifyEmail;
