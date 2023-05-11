/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BackIcon,
  CustomSearchIcon,
  DoubleBackIcon,
  DoubleNextIcon,
  FilterIcon,
  GridIcon,
  ListIcon,
  NextIcon } from '../../../assets/images';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import AddMentor from '../../Modals/AddMentor';

function MentorsHeader({ grid, setGrid }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      {/* mentors title, grid button and list button */}
      <section className="flex items-center">
        <h2 className="font-[600] text-black1 text-[24px]">Mentors</h2>
        <button
          type="button"
          onClick={() => setGrid(true)}
        >
          <GridIcon
            color={grid ? '#058B94' : '#CEFAFD'}
            styling="ml-5"
          />
        </button>
        <button
          type="button"
          onClick={() => setGrid(false)}
        >
          <ListIcon
            color={grid ? '#CEFAFD' : '#058B94'}
            styling="ml-2"
          />
        </button>
      </section>

      {/* send broadcast, Add new mentor next buttons */}
      <section className="flex items-center">
        <div className="flex items-center">
          <Link to="/admin-dashboard/messages/broadcast-message">
            <button
              type="submit"
              className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 hover:bg-pri10 text-[12px] text-pri2 mr-[15px]"
            >
              Send Broadcast Message
            </button>
          </Link>

          <button
            type="submit"
            className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri3 text-pri11 text-[12px] hover:bg-pri2 mr-[15px]"
            onClick={() => dispatch(openModal(<AddMentor />))}
          >
            Add New Mentor
          </button>
        </div>

        {/* back and double back buttons */}
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
          <p className="font-[600] text-[16px] text-black2">1 - 10 of 20</p>
        </div>
        <div className="flex items-center">
          <button type="button">
            <NextIcon color="#058B94" />
          </button>
          <button type="button">
            <DoubleNextIcon color="#058B94" />
          </button>
        </div>

        <button
          type="submit"
          className="mx-5"
        >
          <CustomSearchIcon
            color="#058B94"
            styling=""
          />
        </button>

        <button
          className=""
          type="button"
        >
          <FilterIcon
            color="#058B94"
            styling=""
          />
        </button>
      </section>
    </div>
  );
}

export default MentorsHeader;
