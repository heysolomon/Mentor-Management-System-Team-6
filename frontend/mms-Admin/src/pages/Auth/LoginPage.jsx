/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SpinnerCircular } from 'spinners-react';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';
import GoogleAuthButton from '../../components/utilities/Buttons/GoogleAuthButton';
import { api } from '../../services/api';
import { loginFailure,
  loginStart,
  loginSuccess } from '../../redux/features/userSlice';

function LoginPage() {
  // form values
  const initialValues = {
    email: '',
    password: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        `Must Contain One Uppercase, One Lowercase,
            One Number and one special case Character`,
      ),
  });

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { userInfo, loggingIn, error } = useSelector((state) => state.user);

  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  // redirecting
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const login = async (values) => {
    dispatch(loginStart());
    try {
      const user = await api.post('/login', {
        ...values,
      });
      // console.log(user.data);
      dispatch(loginSuccess(user.data));
      const token = userInfo.data.access_token;
      setToken(token);
      setMessage(user.data.message);
      setTimeout(() => {
        navigate('/admin-dashboard');
        if (from) navigate(from);
      }, 1000);
    } catch (err) {
      if (err) {
        dispatch(loginFailure());
        // console.log(err);
        setMessage(err.response.data.message);
      }
    }
  };

  const submit = async (values) => {
    login(values);
  };
  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-[85%] md:w-[65%] mx-auto">
        <h1 className="text-black1 text-[32px] font-[700] font-mukta">
          Welcome!
        </h1>
        <h2 className="text-black5 text-[24px] font-[400] font-mukta">
          Login to continue
        </h2>
        {/* This is a formik form component for wrapping the input fields
         ** you check the components/FormikForm to see the component
         ** it accepts the initialValues and validate objects as props into the component
         */}
        <FormikForm
          submit={submit}
          initialValues={initialValues}
          validationSchema={validate}
          className="mt-[20px]"
          styling="flex justify-center items-center flex-col"
        >
          <InputField
            tag="input"
            type="email"
            name="email"
            placeholder="Email"
            styling="mb-[20px]"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <InputField
            tag="input"
            type="password"
            name="password"
            placeholder="Password"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <p
            className={`font-[400] text-black5 font-mukta text-[16px] mt-[20px] ${
              error ? 'text-red-500' : 'text-pri2'
            }`}
          >
            {message}
          </p>
          <Button width="w-full mt-[28px]">
            {loggingIn ? (
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
        <div className="flex justify-end mt-[22px]">
          <Link
            to="/password-reset-verify-email"
            className="text-black1 font-[600] font-mukta text-[16px] underline"
          >
            Forgot Password?
          </Link>
        </div>
        {/* the google signin authentication button */}
        <GoogleAuthButton styling="my-[40px]" />
      </div>
    </div>
  );
}

export default LoginPage;
