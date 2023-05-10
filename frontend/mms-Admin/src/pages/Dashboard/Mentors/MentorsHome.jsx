import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MentorCard from '../../../components/Dashboard/Mentors/MentorCard';
import MentorsHeader from '../../../components/Dashboard/Mentors/MentorsHeader';
import MentorsLoading from '../../../components/Dashboard/Mentors/MentorsLoading';
import { getMentorsFailure,
  getMentorsStart,
  getMentorsSuccess } from '../../../redux/features/mentorsSlice';
import { mentors } from '../../../services/api';

function MentorsHome() {
  const { userInfo } = useSelector((state) => state.user);
  const { isLoading, isMentorClicked, clickedMentor } = useSelector(
    (state) => state.mentors,
  );
  const [grid, setGrid] = useState(true);
  const userToken = userInfo.data.access_token;
  const dispatch = useDispatch();

  const mentorsList = [
    {
      id: 1,
      name: 'Alison Davis',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 2,
      name: 'Olivia Cooper',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 3,
      name: 'Ethan Patel',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 4,
      name: 'Ava Ramirez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 5,
      name: 'Caleb Nguyen',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 6,
      name: 'Chloe Kim',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 7,
      name: 'Jackson Robinson',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 8,
      name: 'Sophia Singh',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 9,
      name: 'Liam Davis',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
    },
    {
      id: 10,
      name: 'Emma Hernandez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
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
    <div className="">
      <MentorsHeader setGrid={setGrid} grid={grid} />
      {!isLoading ? (
        <div className={`mt-[27px] ${grid && 'grid grid-cols-2 gap-x-[20px]'}`}>
          {mentorsList.map((mentor) => (
            <Link key={mentor.id} to="/admin-dashboard/mentors/mentor-info">
              <MentorCard
                mentor={mentor}
                key={mentor.id}
                grid={grid}
                setGrid={setGrid}
              />
            </Link>
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
  );
}

export default MentorsHome;
