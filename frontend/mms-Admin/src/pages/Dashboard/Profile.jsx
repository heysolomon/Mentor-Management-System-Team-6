/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/all';
import email from '../../assets/profile_assets/email.png';
import globe from '../../assets/profile_assets/globe.png';
import twitter from '../../assets/profile_assets/twitter.png';
import github from '../../assets/profile_assets/github.png';
import country from '../../assets/profile_assets/country.svg';
import linkedin from '../../assets/profile_assets/linkedin.png';
import location from '../../assets/profile_assets/location.png';
import calendar from '../../assets/profile_assets/calendar.png';
import instagram from '../../assets/profile_assets/instagram.png';

function Profile() {
  const { userInfo, userProfile } = useSelector((state) => state.user);
  const { profileId } = userInfo.data.user;

  return (
    <div className="h-full">
      {profileId && userProfile !== null ? (
        <div className="mt-[20px]  pb-[100px] pr-[10px] h-full overflow-y-auto scroll">
          <section className="flex justify-between items-center">
            <div className="flex items-center">
              <FaUserCircle className="h-24 w-24 text-pri2" />
              <div className="ml-6">
                <div className="flex items-center">
                  <h2 className="font-semibold text-2xl text-black2 mr-2">
                    {userProfile.firstname}
                    {' '}
                    {userProfile.lastname}
                  </h2>
                  <img src={country} alt="img" />
                </div>
                <h4 className="text-black5">Admin</h4>
              </div>
            </div>

            <button
              type="button"
              className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
            >
              Edit Profile
            </button>
          </section>

          {/* profile body */}
          <section className="border-solid border-2 rounded-xl border-black9 mt-[60px] px-[30px] py-[22px]">
            <h1 className="text-2xl font-semibold text-black2 mb-2.5">About</h1>
            <p className="bg-pri11 mb-16 py-2.5 px-6 text-black3 text-lg">
              {userProfile.about}
            </p>

            <section className="w-3/6 grid grid-cols-2 gap-8">
              <div className="flex items-center">
                <img src={email} alt="email" />
                <h5 className="text-black5 ml-1">{userProfile.email}</h5>
              </div>

              <div className="flex items-center">
                <img src={location} alt="location" />
                <h5 className="text-black5 ml-1">
                  {userProfile.location.city}
                  ,
                  {' '}
                  {userProfile.location.country}
                </h5>
              </div>

              <div className="flex items-center">
                <img src={globe} alt="globe" />
                <h5 className="text-black5 ml-1">{userProfile.website}</h5>
              </div>

              <div className="flex items-center">
                <img src={calendar} alt="calendar" />
                <h5 className="text-black5 ml-1">Member since June 22, 2021</h5>
              </div>
            </section>

            {userProfile.socialLinks !== [] && (
              <>
                {/* social links */}
                <h1 className="text-2xl font-semibold text-black2 mt-[60px] mb-2.5">
                  Social
                </h1>
                <section className="grid grid-cols-2 gap-8">
                  {userProfile.socialLinks.map((i) => (
                    <div
                      className="flex items-center text- font-semibold bg-pri10 p-2"
                      key={i.name}
                    >
                      <img
                        src={
                          i.name === 'github'
                            ? github
                            : i.name === 'linkedin'
                              ? linkedin
                              : i.name === 'instagram'
                                ? instagram
                                : i.name === 'twitter'
                                  ? twitter
                                  : ''
                        }
                        alt="github"
                      />
                      <h5 className="text-black5 ml-5">{i.url}</h5>
                    </div>
                  ))}
                </section>
              </>
            )}
          </section>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
          <h1 className="font-[600] text-[18px] text-black3">
            A profile does not exist for this user, please follow the
            instructions below to create a new profile
          </h1>
          <p className="mt-4 text-black3 font-[600]">
            Click to navigate to the settings page to create your profile
            {' '}
            <Link
              to="/admin-dashboard/settings"
              className="underline rounded-lg"
            >
              Settings &gt; Settings General
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
