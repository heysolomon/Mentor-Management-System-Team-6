/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Certificate,
  MentorManagerRequestIllustration,
  MentorRequestIllustration } from '../../../assets/images';

function CertificatesHome() {
  const categories = [
    {
      id: 1,
      name: 'Approved Certificates',
      requests: '287',
      icon: <MentorManagerRequestIllustration styling="w-[40px] mr-3" />,
      link: '',
    },
    {
      id: 2,
      name: 'My Generated Certificates',
      requests: '160',
      icon: <MentorRequestIllustration styling="w-[40px] mr-3" />,
      link: '/admin-dashboard/certificates/generated-certificates',
    },
  ];

  const recents = [
    {
      id: 1,
      name: 'Chloe Kim',
      role: 'GADS CLOUD 2022 - COMPLETION',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      dateAdded: 'Added 0ct. 10 2022',
    },
    {
      id: 2,
      name: 'Jackson Robinson',
      role: 'GADS CLOUD 2022 - COMPLETION',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      dateAdded: 'Added 0ct. 10 2022',
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

          <div className="flex items-center justify-between mt-7 pb-5 px-4">
            <p className="font-[400] text-[14px] text-black2">
              Certificates pending approval
            </p>

            <div className="h-[19px] w-[18px] flex items-center justify-center bg-[#FF5964] font-[400] text-[12px] text-white rounded-[3px]">
              3
            </div>
          </div>
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
                <Certificate styling="w-[50px]" />

                <div className="ml-[15px] w-[70%]">
                  <h2 className="font-[600] text-[16px] text-black2 truncate">
                    {i.name}
                  </h2>

                  <p className="font-[400] text-[12px] text-black3 -my-1 truncate">
                    {i.role}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri3 text-pri11 text-[12px] hover:bg-pri2"
              >
                View
              </button>
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

export default CertificatesHome;
