import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SpinnerCircular } from 'spinners-react';
import * as Yup from 'yup';
import FormikForm from '../../../components/FormikForm/FormikForm';
import InputField from '../../../components/InputField';
import Button from '../../../components/utilities/Buttons/Button';
import { changePasswordFailure,
  changePasswordStart,
  changePasswordSuccess } from '../../../redux/features/userSlice';
import { api } from '../../../services/api';

function SettingChangePassword() {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
  };

  // the validation schema for the forgot password
  const validate = Yup.object({
    oldPassword: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('Current Password is required'),
    newPassword: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('New Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        `Must Contain One Uppercase, One Lowercase,
        One Number and one special case Character`,
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'New Password must match')
      .required('Confirm Password is required'),
  });

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const { userInfo, changePassword, changePasswordError } = useSelector(
    (state) => state.user,
  );

  // logged in user's id
  const userId = userInfo.data.user.id;

  const userToken = userInfo.data.access_token;

  const changeUserPassword = async (values) => {
    dispatch(changePasswordStart());
    try {
      const changeUserPasswordRequest = await api.patch(
        `/${userId}/password`,
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(changePasswordSuccess(changeUserPasswordRequest));
      setMessage(changeUserPasswordRequest.data.message);
    } catch (err) {
      if (err) {
        dispatch(changePasswordFailure());
        setMessage(err.response.data.message);
      }
    }
  };

  const submit = async (values) => {
    changeUserPassword(values);
  };
  return (
    <div className="border-[1px] rounded-[5px] border-black9 mx-10 p-5">
      <FormikForm
        initialValues={initialValues}
        validationSchema={validate}
        submit={submit}
      >
        {/* old password */}
        <div className="flex items-center">
          <div className="w-[33%] hidden md:block">
            <p className="text-black2 text-[16px] font-[600]">
              Current Password
            </p>
          </div>

          <InputField
            tag="input"
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="Your current password"
            inputStyle="text-[14px] md:text-[16px] pl-[30px]"
          />
        </div>
        {/* new password */}
        <div className="flex items-center mt-[30px]">
          <div className="w-[33%] hidden md:block">
            <p className="text-black2 text-[16px] font-[600]">New Password</p>
          </div>
          <InputField
            tag="input"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Must be at least 8 characters"
            inputStyle="text-[14px] md:text-[16px] pl-[30px]"
          />
        </div>
        {/* confirm password */}
        <div className="flex items-center mt-[30px]">
          <div className="w-[33%] hidden md:block">
            <p className="text-black2 text-[16px] font-[600]">
              Confirm New Password
            </p>
          </div>
          <InputField
            tag="input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Must match your new password"
            inputStyle="text-[14px] md:text-[16px] pl-[30px]"
          />
        </div>

        <p
          className={`font-[400] text-black5 font-mukta text-[16px] mt-[20px] text-center ${
            changePasswordError ? 'text-red-500' : 'text-pri2'
          }`}
        >
          {message}
        </p>

        <div className="flex justify-end mt-[30px]">
          <Button width="w-full md:w-[35%]">
            {changePassword ? (
              <SpinnerCircular
                color="#F7FEFF"
                className="mr-2"
                thickness={250}
                size={20}
              />
            ) : (
              ' Save new password'
            )}
          </Button>
        </div>
        <div className="flex justify-center mt-[30px]">
          <p className="font-[600] text-[18px] text-[#023C40] underline">
            Forgot password?
          </p>
        </div>
      </FormikForm>
    </div>
  );
}

export default SettingChangePassword;
