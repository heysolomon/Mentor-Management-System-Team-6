/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MentorIcon,
  MentorManagerIcon,
  MentorManagerRequestIllustration,
  MentorRequestIllustration,
  ProgramsIcon,
  ProgramsRequestIllustration } from '../../../assets/images';

function ApprovalRequestHome() {
  const categories = [
    {
      id: 1,
      name: 'Mentor Manager Requests',
      requests: '287',
      icon: <MentorManagerRequestIllustration styling="w-[40px] mr-3" />,
      link: '',
    },
    {
      id: 2,
      name: 'Mentor Requests',
      requests: '160',
      icon: <MentorRequestIllustration styling="w-[40px] mr-3" />,
      link: '/admin-dashboard/approval-requests/mentor-requests',
    },
    {
      id: 3,
      name: 'Programs Requests',
      requests: '287',
      icon: <ProgramsRequestIllustration styling="w-[40px] mr-3" />,
      link: '/admin-dashboard/approval-requests/programs-requests',
    },
  ];

  const recents = [
    {
      id: 1,
      isMentor: true,
      isPrograms: false,
      isMentorManager: false,
      name: 'Chloe Kim',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 2,
      isMentor: false,
      isPrograms: true,
      isMentorManager: false,
      name: 'Google Developer Scholarship',
      programs: '6',
      url: 'https://images.unsplash.com/photo-1684020171241-3092315f2840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=574&q=80',
    },
    {
      id: 3,
      isMentor: false,
      isPrograms: false,
      isMentorManager: true,
      name: 'Jackson Robinson',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 4,
      isMentor: false,
      isPrograms: true,
      isMentorManager: false,
      name: 'Google Developer Scholarship',
      programs: '1',
      url: 'https://images.unsplash.com/photo-1684020171241-3092315f2840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=574&q=80',
    },
  ];
  return (
    <div className="grid grid-cols-mentors gap-x-[20px] h-screen">
      {/* left grid */}
      <div className="h-full overflow-y-auto scroll pr-[10px] pb-[200px]">
        <div className="bg-pri11 pt-3">
          <h4 className="font-[600] text-[16px] text-black2 mb-[10px] ml-[10px]">
            Category
          </h4>

          {categories.map((i) => (
            <div className="px-2" key={i.id}>
              <NavLink
                to={i.link}
                className="flex justify-between items-center h-[70px] p-5"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#FFFFFF' : '#F7FEFF',
                })}
                end
              >
                <div className="flex items-center">
                  {i.icon}
                  <p className="font-[600] text-[14px] text-black2">{i.name}</p>
                </div>
                <p className="font-[700] text-[22px] text-black1">
                  {i.requests}
                </p>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="bg-pri11 mt-[30px] pt-3">
          <h4 className="font-[600] text-[16px] text-black2 mb-[10px] ml-[10px]">
            Recent
          </h4>

          {recents.map((i) => (
            <div
              className="border-[1px] rounded-[5px] border-pri10 flex justify-between items-center mb-[10px] py-[10px] px-[10px] mx-3 bg-white"
              key={i.id}
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={i.url}
                    alt=""
                    className="w-[45px] h-[45px] object-cover object-top rounded-full"
                  />
                  <div className="absolute top-0 right-0 w-[19px] h-[19px] rounded-full bg-pri11 flex items-center justify-center">
                    {i.isMentorManager && (
                      <MentorManagerIcon color="#FF5964" styling="w-[80%]" />
                    )}

                    {i.isMentor && (
                      <MentorIcon color="#FF5964" styling="w-[80%]" />
                    )}
                    {i.isPrograms && (
                      <ProgramsIcon color="#FF5964" styling="w-[80%]" />
                    )}
                  </div>
                </div>

                <div className="ml-[15px] w-[70%]">
                  <h2 className="font-[600] text-[16px] text-black2 truncate">
                    {i.name}
                  </h2>

                  <p className="font-[400] text-[12px] text-black3 -my-1 truncate">
                    {i.role}
                  </p>
                </div>
              </div>

              {i.isPrograms ? (
                <div className="h-[19px] w-[21px] bg-[#CC000E] text-[14px] text-black10 font-[400] flex items-center justify-center">
                  {i.programs}
                </div>
              ) : (
                <button
                  type="submit"
                  className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri3 text-pri11 text-[12px] hover:bg-pri2"
                >
                  View
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* right-grid */}
      <div className="h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default ApprovalRequestHome;
