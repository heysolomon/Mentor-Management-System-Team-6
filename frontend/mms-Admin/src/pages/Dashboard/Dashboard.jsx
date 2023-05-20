import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Dashboard/Navbar';

import Sidebar from '../../components/Dashboard/Sidebar';

import Modal from '../../components/Modals/Modal';
import { getProfileFailure,
  getProfileStart,
  getProfileSuccess } from '../../redux/features/userSlice';
import { api } from '../../services/api';

// import { api } from '../../services/api';

function Dashboard() {
  // const dispatch = useDispatch();
  const { content, isLarge } = useSelector((state) => state.modal);
  const { userInfo, userProfile } = useSelector((state) => state.user);
  const userToken = userInfo.data.access_token;
  const { profileId, id } = userInfo.data.user;

  const dispatch = useDispatch();

  useEffect(() => {
    // to get the user's profile
    const getProfile = () => {
      dispatch(getProfileStart());
      api
        .get(`/${id}/profiles/${profileId}`, {
          headers: {
            Authorization: `bearer ${userToken}`,
          },
        })
        .then((res) => {
          dispatch(getProfileSuccess(res.data.data.profile));
          // console.log();
        })
        .catch(() => {
          dispatch(getProfileFailure());
          // console.log(err);
        });
    };
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);
  return (
    <>
      {/* for all modals */}
      <Modal content={content} isLarge={isLarge} />
      <div className="w-full h-screen font-mukta">
        <Navbar />

        <div className="relative left-0 right-0 bottom-0 top-14 md:top-20">
          <Sidebar />

          <div className="fixed md:left-[20%] w-full md:w-[80%] h-screen p-5 pb-20">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
