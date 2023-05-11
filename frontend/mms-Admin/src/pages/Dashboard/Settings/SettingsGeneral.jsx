/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  UserAvatar } from '../../../assets/images';
import SocialIcon from '../../../components/Dashboard/Settings/Socials';
import FormikForm from '../../../components/FormikForm/FormikForm';
import InputField from '../../../components/InputField';
import Button from '../../../components/utilities/Buttons/Button';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import ProfileSaved from '../../../components/Modals/ProfileSaved';
import { api } from '../../../services/api';
import { createProfileFailure,
  createProfileStart,
  createProfileSuccess } from '../../../redux/features/userSlice';
import UploadProfilePicture from '../../../components/Modals/UploadProfilePicture';

function SettingsGeneral() {
  const initialValues = {
    firstName: '',
    lastName: '',
    about: '',
    website: '',
    city: '',
    country: '',
    github: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('First name is required'),
    lastName: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Last name is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    about: Yup.string().required('Bio is required'),
    website: Yup.string().url('Must be a URL').required('Website is required'),
    github: Yup.string().url('Must be a URL'),
    twitter: Yup.string().url('Must be a URL'),
    instagram: Yup.string().url('Must be a URL'),
    linkedin: Yup.string().url('Must be a URL'),
  });

  // select options tag
  const options = [
    {
      id: 1,
      name: 'Test 1',
    },
    {
      id: 2,
      name: 'Test 2',
    },
    {
      id: 3,
      name: 'Test 3',
    },
    {
      id: 4,
      name: 'Test 4',
    },
  ];
  // profile picture upload

  const [message, setMessage] = useState('');
  // redux state for the reset password success
  const dispatch = useDispatch();

  const {
    userInfo,
    creatingProfile,
    creatingProfileError,
    profilePicture,
    uploadingProfilePicture,
  } = useSelector((state) => state.user);

  const loggedInUser = userInfo.data.user;
  // logged in user's id
  const userId = loggedInUser.id;
  // user login token
  const userToken = userInfo.data.access_token;

  // this function is for creating the user profile
  const createProfile = async (values) => {
    // creating a new values object to follow the backend's schema
    const createProfileValues = {
      ...values,
      socialLinks: [
        {
          url: values.github,
          name: 'github',
        },
        {
          url: values.linkedin,
          name: 'linkedin',
        },
        {
          url: values.instagram,
          name: 'instagram',
        },
        {
          url: values.twitter,
          name: 'twitter',
        },
      ],
      location: {
        city: values.city,
        state: '',
        country: values.country,
      },
    };
    // deleting the initial values that came from the values object
    delete createProfileValues.instagram;
    delete createProfileValues.github;
    delete createProfileValues.twitter;
    delete createProfileValues.linkedin;
    delete createProfileValues.country;
    delete createProfileValues.city;

    dispatch(createProfileStart());
    try {
      const profileCreate = await api.post(
        `/${userId}/profiles`,
        {
          ...createProfileValues,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(createProfileSuccess(profileCreate.data.data.profile));
      setMessage(profileCreate.data.message);

      // open a modal after success
      dispatch(openModal(<ProfileSaved />));
    } catch (err) {
      if (err) {
        dispatch(createProfileFailure());
        // console.log(err);
        setMessage(err.response.data?.message);
      }
    }
  };

  // Create a reference to the hidden file input element
  const hiddenPictureInput = React.useRef(null);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    setImgUrl(image);
  }, [image]);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));

    dispatch(
      openModal(
        <UploadProfilePicture
          image={image}
          setImage={setImage}
          setImgUrl={setImgUrl}
          imgUrl={imgUrl}
        />,
      ),
    );
  };
  // funtion to upload profile picture
  const handleUpload = () => {
    hiddenPictureInput.current.click();
  };

  // function to submit the profile values
  const submit = async (values) => {
    createProfile(values);
  };

  return (
    <div className="md:border-[1px] md:rounded-[5px] md:border-black9 md:mx-10 md:p-5 mb-[150px]">
      <section className="flex justify-between items-center">
        <div className="flex items-center">
          {profilePicture === null ? (
            <UserAvatar styling="w-[73px]" />
          ) : (
            <img
              src={profilePicture.preview}
              className="w-[73px] h-[73px] object-cover rounded-[50%] object-top"
              alt="profile"
            />
          )}

          <div className="ml-4 md:ml-[20px]">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-black2 mr-2">
                {loggedInUser.firstName}
                {' '}
                {loggedInUser.lastName}
              </h2>
            </div>

            <label htmlFor="uploadPicture">
              <button
                className="h-[24px] bg-pri3 flex items-center justify-center text-white duration-700 text-[12px] font-[400] text-mukta hover:bg-pri2 py-2 rounded-[5px] px-3"
                type="button"
                onClick={handleUpload}
              >
                {uploadingProfilePicture ? (
                  <SpinnerCircular
                    color="#F7FEFF"
                    className="mr-2"
                    thickness={250}
                    size={20}
                  />
                ) : (
                  ' upload picture'
                )}
              </button>
              <input
                type="file"
                id="uploadPicture"
                ref={hiddenPictureInput}
                className="hidden"
                onChange={handleChange}
                accept=".png, .jpeg, .jpg"
              />
            </label>
          </div>
        </div>
      </section>

      {/* input fields */}
      <section className="mt-[25px] w-full">
        <FormikForm
          initialValues={initialValues}
          validationSchema={validate}
          submit={submit}
          classname="w-full"
          styling="w-full"
        >
          {/* fullname */}
          <div className="flex items-center w-full">
            <div className="w-[15%] hidden md:block">
              <p className="text-black2 text-[12px] md:text-[16px] font-[600]">
                Full name
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-[20px] md:w-full">
              <InputField
                tag="input"
                type="text"
                name="firstName"
                id="firstName"
                placeholder={loggedInUser.firstName}
                inputStyle="text-[12px] md:text-[16px] pl-3"
              />
              <InputField
                tag="input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder={loggedInUser.lastName}
                inputStyle="text-[12px] md:text-[16px] pl-3"
              />
            </div>
          </div>

          {/* about */}
          <div className="flex items-center mt-[25px] md:w-full">
            <div className="w-[16%] 2xl:w-[13%] hidden md:block">
              <p className="text-black2 text-[12px] md:text-[16px] font-[600]">
                About
              </p>
            </div>

            <InputField
              tag="textarea"
              type="text"
              name="about"
              id="about"
              placeholder="Your Bio..."
              inputStyle="text-[12px] md:text-[16px] pl-3 w-full items-start"
            />
          </div>

          {/* website */}
          <div className="flex items-center mt-[25px] md:w-full">
            <div className="w-[15%] hidden md:block">
              <p className="text-black2 text-[12px] md:text-[16px] font-[600]">
                Website
              </p>
            </div>

            <InputField
              tag="input"
              type="text"
              name="website"
              id="website"
              styling="w-full"
              placeholder="www.example.com"
              inputStyle="text-[12px] md:text-[16px] pl-3 w-full"
            />
          </div>
          {/* country and city */}
          <div className="grid grid-cols-2 gap-x-[20px] mt-[25px] md:w-full">
            <div className="flex items-center">
              <div className="w-[36%] hidden md:block">
                <p className="text-black2 text-[12px] md:text-[16px] font-[600]">
                  Country
                </p>
              </div>
              <InputField
                tag="select"
                name="country"
                id="country"
                inputStyle="text-[12px] md:text-[16px] pl-3 w-full"
                options={options}
              />
            </div>
            <div className="flex items-center">
              <div className="w-[36%] hidden md:block">
                <p className="text-black2 text-[12px] md:text-[16px] font-[600]">
                  City
                </p>
              </div>

              <InputField
                tag="select"
                name="city"
                id="city"
                inputStyle="text-[12px] md:text-[16px] pl-3 w-full"
                options={options}
              />
            </div>
          </div>

          {/* socials */}
          <div className="flex items-center md:w-full mt-[25px]">
            <div className="w-[15%] hidden md:block">
              <p className="text-black2 text-[12px] md:text-[16px] font-[600]">
                Social
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-[20px] md:w-full">
              <div>
                <div>
                  <SocialIcon
                    icon={<GithubIcon />}
                    text="GitHub"
                    name="github"
                    placeHolder="@githubuser"
                  />
                </div>
                <div className="mt-[10px]">
                  <SocialIcon
                    icon={<LinkedinIcon />}
                    text="LinkedIn"
                    name="linkedin"
                    placeHolder="@linkedinuser"
                  />
                </div>
              </div>
              <div>
                <div>
                  <SocialIcon
                    icon={<InstagramIcon />}
                    text="Instagram"
                    name="instagram"
                    placeHolder="@instagramuser"
                  />
                </div>
                <div className="mt-[10px]">
                  <SocialIcon
                    icon={<TwitterIcon />}
                    text="Twitter"
                    name="twitter"
                    placeHolder="@twitteruser"
                  />
                </div>
              </div>
            </div>
          </div>

          <p
            className={`font-[400] text-black5 font-mukta text-[16px] mt-[20px] text-center ${
              creatingProfileError ? 'text-red-500' : 'text-pri2'
            }`}
          >
            {message}
          </p>

          <div className="flex justify-end mt-[25px]">
            <Button width="px-3 text-[12px] md:text-[16px]">
              {creatingProfile ? (
                <SpinnerCircular
                  color="#F7FEFF"
                  className="mr-2"
                  thickness={250}
                  size={20}
                />
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </FormikForm>
      </section>
    </div>
  );
}

export default SettingsGeneral;
