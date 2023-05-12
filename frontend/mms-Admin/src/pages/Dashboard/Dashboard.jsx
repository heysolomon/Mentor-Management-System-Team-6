import React from 'react';

import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Navbar from '../../components/Dashboard/Navbar';

import Sidebar from '../../components/Dashboard/Sidebar';

import Modal from '../../components/Modals/Modal';

// import { api } from '../../services/api';

function Dashboard() {
  // const dispatch = useDispatch();
  const content = useSelector((state) => state.modal.content);
  // const { userInfo } = useSelector((state) => state.user);

  // const loggedInUser = userInfo.data.user;
  // logged in user's id
  // const userId = loggedInUser.id;
  // user login token
  // const userToken = userInfo.data.access_token;
  // useEffect(() => {
  //   const getTasks = () => {
  //     // dispatch(getTaskStart());
  //     api
  //       .get(`/${userId}/profiles/${profile_id}`, {
  //         headers: {
  //           Authorization: `bearer ${userToken}`,
  //         },
  //       })
  //       .then((res) => {
  //         // dispatch(getTaskSuccess(res.data.data.tasks));
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         // dispatch(getTaskFailure());
  //         console.log(err.response.data.detail);
  //       });
  //   };
  //   getTasks();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      {/* for all modals */}
      <Modal content={content} />
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
