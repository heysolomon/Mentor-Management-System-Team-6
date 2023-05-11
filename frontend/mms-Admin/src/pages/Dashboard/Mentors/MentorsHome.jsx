import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MentorCard from '../../../components/Dashboard/Mentors/MentorCard';
import MentorsHeader from '../../../components/Dashboard/Mentors/MentorsHeader';
import MentorsLoading from '../../../components/Dashboard/Mentors/MentorsLoading';
import { getMentorsFailure,
  getMentorsStart,
  getMentorsSuccess } from '../../../redux/features/mentorsSlice';
import { mentors } from '../../../services/api';

function MentorsHome() {
  const { userInfo } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.mentors);
  const [grid, setGrid] = useState(true);
  const userToken = userInfo.data.access_token;
  const dispatch = useDispatch();

  const mentorsList = [
    {
      id: 1,
      name: 'Alison Davis',
      role: 'Program Assistant, She/her',
      tags: ['MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 2,
      name: 'Olivia Cooper',
      role: 'Mentor Manager, Andela, She/her',
      tags: ['PROGRAM ASST.'],
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 3,
      name: 'Emma Patel',
      role: 'Mentor, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS', 'MENTOR-MANAGER'],
      url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 4,
      name: 'Ava Ramirez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 5,
      name: 'Caleb Nguyen',
      role: 'Admin, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 6,
      name: 'Chloe Kim',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 7,
      name: 'Jackson Robinson',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 8,
      name: 'Sophia Singh',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 9,
      name: 'Liam Davis',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 10,
      name: 'Emma Hernandez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 11,
      name: 'Sophia Singh',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 12,
      name: 'Liam Davis',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 13,
      name: 'Emma Hernandez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
  ];

  useEffect(() => {
    const getMentors = () => {
      dispatch(getMentorsStart());
      mentors
        .get('/mentors', {
          headers: {
            Authorization: `bearer ${userToken}`,
          },
        })
        .then((res) => {
          dispatch(getMentorsSuccess(res.data.data.mentors));
          //   console.log(res.data.data.mentors);
        })
        .catch(() => {
          dispatch(getMentorsFailure());
          //   console.log(err);
        });
    };
    getMentors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMentorsStart, getMentorsSuccess, getMentorsFailure]);
  return (
    <div className="h-screen">
      <MentorsHeader setGrid={setGrid} grid={grid} />
      <div className="h-full overflow-y-auto scroll pr-[10px] pb-36">
        {!isLoading ? (
          <div
            className={`mt-[27px] ${grid && 'grid grid-cols-2 gap-x-[20px]'}`}
          >
            {mentorsList.map((mentor) => (
              <MentorCard
                mentor={mentor}
                key={mentor.id}
                grid={grid}
                setGrid={setGrid}
              />
            ))}
          </div>
        ) : (
          <div
            className={`mt-[27px] ${
              grid && 'grid grid-cols-2 gap-x-[20px] gap-y-[10px]'
            }`}
          >
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
            <MentorsLoading />
          </div>
        )}
      </div>
    </div>
  );
}

export default MentorsHome;
