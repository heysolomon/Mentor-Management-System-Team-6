/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

function MentorManagerInfoTabs({ styling }) {
  const tabs = [
    {
      id: 1,
      name: 'About',
      link: '',
    },
    {
      id: 2,
      name: 'Programs',
      link: '/admin-dashboard/mentor-managers/mentor-info/programs',
    },
    {
      id: 3,
      name: 'Mentors',
      link: '/admin-dashboard/mentor-managers/mentor-info/mentors',
    },
    {
      id: 4,
      name: 'Tasks',
      link: '/admin-dashboard/mentor-managers/mentor-info/tasks',
    },
    {
      id: 5,
      name: 'Certificates',
      link: '/admin-dashboard/mentor-managers/mentor-info/certificates',
    },
  ];
  return (
    <div className={styling}>
      <div className="w-full border-b-black5 border-b-[1px] flex justify-between mt-2">
        {tabs.map((i) => (
          <NavLink
            to={i.link}
            key={i.id}
            className="w-[25%] flex items-center justify-center h-full mb-[-1px] py-1 text-[16px] font-[400] text-black5"
            style={({ isActive }) => ({
              borderBottom: isActive && '3px solid #058B94',
              color: isActive && '#058B94',
              fontWeight: isActive && '700',
            })}
            end
          >
            {i.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MentorManagerInfoTabs;
