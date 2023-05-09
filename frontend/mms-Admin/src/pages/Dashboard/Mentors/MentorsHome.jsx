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
    <div className="w-full h-full">
      <MentorsHeader setGrid={setGrid} grid={grid} />
      {!isLoading ? (
        <div className={`mt-[27px] ${grid && 'grid grid-cols-2 gap-x-[20px]'}`}>
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
          <MentorCard grid={grid} setGrid={setGrid} />
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
