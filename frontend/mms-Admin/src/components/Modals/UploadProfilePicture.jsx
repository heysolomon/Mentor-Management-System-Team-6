/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/features/Modals/modalSlice';
import { uploadProfilePictureFailure,
  uploadProfilePictureStart,
  uploadProfilePictureSuccess } from '../../redux/features/userSlice';
import { api } from '../../services/api';
import Button from '../utilities/Buttons/Button';

function UploadProfilePicture({ image, imgUrl }) {
  const dispatch = useDispatch();

  const { userInfo, userProfile } = useSelector((state) => state.user);
  const loggedInUser = userInfo.data.user;
  // logged in user's id
  const userId = loggedInUser.id;
  // user login token
  const userToken = userInfo.data.access_token;
  // user profile id
  const profileId = userProfile.id;

  const uploadPicture = async () => {
    dispatch(uploadProfilePictureStart());

    const form = new FormData();

    form.append('profile_picture', image);
    try {
      await api.post(
        `/${userId}/profiles/${profileId}/picture`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(uploadProfilePictureSuccess());
      dispatch(closeModal());
    } catch (err) {
      if (err) {
        dispatch(uploadProfilePictureFailure());
      }
    }
  };

  return (
    <div>
      <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
        New Profile Picture
      </h2>
      <img src={imgUrl} className="w-[200px] h-[200px] rounded-full object-cover object-top mt-5 mb-10" alt="" />

      <div className="w-full">
        <Button
          width="w-full mt-[28px] w-[50%]"
          onClick={uploadPicture}
          aria-hidden="true"
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default UploadProfilePicture;
