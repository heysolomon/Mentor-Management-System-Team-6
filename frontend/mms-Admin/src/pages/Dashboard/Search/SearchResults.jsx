import React from 'react';
import { useSelector } from 'react-redux';
import { BackIcon,
  DoubleBackIcon,
  DoubleNextIcon,
  NextIcon } from '../../../assets/images';
import MentorFilterDropdown from '../../../components/utilities/DropdownMentors';

function SearchResults() {
  const { filteredResults } = useSelector((state) => state.search);

  const filterOptions = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'mentors',
      label: 'Mentors',
    },
    {
      value: 'programs',
      label: 'Programs',
    },
  ];
  return (
    <div className="h-full">
      <h1 className="font-[600] text-[22px] text-black1">Search results</h1>
      <section className="flex items-center justify-between my-3">
        <MentorFilterDropdown options={filterOptions} placeHolder="All" />
        {/* back and double back buttons */}
        <div className="flex items-center">
          <div className="flex items-center">
            <button type="button">
              <BackIcon color="#058B94" />
            </button>
            <button type="button">
              <DoubleBackIcon color="#058B94" />
            </button>
          </div>
          {/* number of pages  */}
          <div className="flex items-center justify-center">
            <p className="font-[600] text-[14px] text-black2">1 - 10 of 20</p>
          </div>
          <div className="flex items-center">
            <button type="button">
              <NextIcon color="#058B94" />
            </button>
            <button type="button">
              <DoubleNextIcon color="#058B94" />
            </button>
          </div>
        </div>
      </section>

      <section className="h-full overflow-y-auto scroll pr-[10px] pb-[150px]">
        {filteredResults.map((i) => (
          <div
            key={i.key}
            className="flex items-center justify-between border-[1px] border-black9 mb-3 rounded-[5px] px-5 h-[80px]"
          >
            <div className="flex items-center">
              {i.img}
              <div>
                <p className="font-[600] text-[18px] text-black2 ml-3">
                  {i.name}
                </p>
                {i.more}
              </div>
            </div>

            <p className="text-black5 font-[400] text-[14px]">{i.location}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SearchResults;
