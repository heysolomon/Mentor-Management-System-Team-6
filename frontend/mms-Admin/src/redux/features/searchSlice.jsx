/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { GoCalendar } from 'react-icons/go';
import { Certificate, MentorTaskIcon, ReportIcon } from '../../assets/images';
import Google from '../../assets/archive/google.svg';
import Time from '../../assets/archive/time.svg';

const searchSlice = createSlice({
  name: 'mentors',
  initialState: {
    results: [
      {
        id: 1,
        name: 'Google Africa Scholarship Program',
        img: <img src={Google} alt="Google" className="w-[50px]" />,
        location: 'In Programs',
        more: (
          <div className="flex items-center justify-between w-max ml-3">
            <div className="taskdate flex items-center">
              <GoCalendar className="text-pri3 text-l me-1" />
              <p className="text-xs text-gray-600 font-light align-middle">
                Dec 12, 2022
              </p>
            </div>
            <div className="flex items-center ml-2">
              <img src={Time} alt="time" />
              <p className="ml-1 font-normal text-xs text-black5">8:00 pm</p>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        name: 'GADS',
        img: <MentorTaskIcon color="#058B94" styling="w-[50px]" />,
        location: 'In Tasks',
        more: (
          <div className="taskdate flex items-center ml-3">
            <GoCalendar className="text-black5 text-l me-2" />
            <p className="text-xs text-black5 font-light align-middle">
              3 days from now
            </p>
          </div>
        ),
      },
      {
        id: 3,
        name: 'Google Africa Scholarship Program',
        img: <img src={Google} alt="Google" className="w-[50px]" />,
        location: 'In Programs',
      },
      {
        id: 4,
        name: 'GADS CLOUD 2022 - COMPLETION',
        img: <Certificate styling="w-[50px]" />,
        location: 'In Certificates',
      },
      {
        id: 5,
        name: 'Google Africa Scholarship',
        img: <ReportIcon color="#058B94" styling="w-[50px]" />,
        location: 'In Reports',
        more: (
          <div className="flex ml-3">
            <p className="text-xs text-black5 font-light align-middle">
              By Ibrahim Kabir - 19th - 25th Oct 22
            </p>
          </div>
        ),
      },
      {
        id: 4,
        name: 'GADS CLOUD 2022 - COMPLETION',
        img: <Certificate styling="w-[50px]" />,
        location: 'In Certificates',
      },
    ],

    filteredResults: [],
  },
  reducers: {
    searchFor: (state, action) => {
      // eslint-disable-next-line max-len
      const filteredResults = state.results.filter((x) => x.name.toLowerCase().includes(action.payload.toLowerCase()));

      state.filteredResults = filteredResults;
    },
  },
});

export default searchSlice.reducer;
export const { searchFor } = searchSlice.actions;
