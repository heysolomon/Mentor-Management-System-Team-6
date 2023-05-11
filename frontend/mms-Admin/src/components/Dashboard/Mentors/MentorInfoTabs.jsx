/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

function MentorInfoTabs({ styling }) {
  const tabs = [
    {
      id: 1,
      name: 'About',
      link: '',
    },
    {
      id: 2,
      name: 'Programs',
      link: '/admin-dashboard/mentors/mentor-info/programs',
    },
    {
      id: 3,
      name: 'Tasks',
      link: '/admin-dashboard/mentors/mentor-info/tasks',
    },
    {
      id: 4,
      name: 'Certificates',
      link: '/admin-dashboard/mentors/mentor-info/certificates',
    },
  ];
  return (
    <div className={styling}>
      <div className="w-full border-b-black5 border-b-[1px] flex justify-between mt-2">
        {tabs.map((purse) => (
          <NavLink
            to={purse.link}
            key={purse.id}
            className="w-[25%] flex items-center justify-center h-full mb-[-1px] py-1 text-[16px] font-[400] text-black5"
            style={({ isActive }) => ({
              borderBottom: isActive && '3px solid #058B94',
              color: isActive && '#058B94',
              fontWeight: isActive && '700',
            })}
            end
          >
            {purse.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MentorInfoTabs;
