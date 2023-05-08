/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/features/Modals/modalSlice';
import { uploadProfilePictureFailure,
  uploadProfilePictureStart,
  uploadProfilePictureSuccess } from '../../redux/features/userSlice';
import { api } from '../../services/api';
import Button from '../utilities/Buttons/Button';

function UploadProfilePicture({ image, imgUrl, setImgUrl, setImage }) {
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
    // console.log(image);
    try {
      const upload = await api.post(
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
      console.log(upload);

      const getProfile = async () => {
        // dispatch(createProfileStart());
        try {
          const profile = await api.get(`/${userId}/profiles/${profileId}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          //   dispatch(createProfileSuccess(profileCreate.data.data.profile));
          //   setMessage(profileCreate.data.message);

          // open a modal after success
          //   dispatch(openModal(<ProfileSaved />));
          console(profile);
        } catch (err) {
          if (err) {
            // dispatch(createProfileFailure());
            console.log(err);
            // setMessage(err.response.data?.message);
          }
        }
      };

      getProfile();
    } catch (err) {
      if (err) {
        setImage(null);
        setImgUrl(null);
        dispatch(uploadProfilePictureFailure());
        console.log(err);
        // setMessage(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (image !== null) {
      setImgUrl(URL.createObjectURL(image));
      setImage(null);
    }
  }, [image, imgUrl, setImage, setImgUrl]);

  return (
    <div>
      <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
        Profile Picture
      </h2>

      {!image ? (
        <p
          className={`font-[400] font-mukta text-[16px] mt-[20px] text-center
             text-red-500`}
        >
          No Image has been selected
        </p>
      ) : (
        <img
          src={imgUrl}
          className="rounded-[50%] w-[150px] h-[150px] object-cover object-top my-3"
          alt=""
        />
      )}

      <div className="w-full">
        <Button
          width="w-full mt-[28px]"
          onClick={uploadPicture}
          aria-hidden="true"
        >
          Upload Picture
        </Button>
      </div>
    </div>
  );
}

export default UploadProfilePicture;
