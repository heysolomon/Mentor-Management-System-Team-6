/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';

function GenerateNewCertificate() {
  const [mentorsOpen, setMentorsOpen] = useState(true);
  //   const [programsOpen, setProgramsOpen] = useState(false);
  const [searchText, setSearch] = useState('');
  const [selectedMentors, setSelectedMentors] = useState([]);
  //   const [selectedPrograms, setSelectedPrograms] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const pushMentors = (mentorSelected) => {
    if (selectedMentors.length <= 1) {
      setSelectedMentors([mentorSelected]);
    }
  };

  const mentorsList = [
    {
      id: 1,
      name: 'Alison Davis',
      role: 'Program Assistant, She/her',
      tags: ['MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 2,
      name: 'Olivia Cooper',
      role: 'Mentor Manager, Andela, She/her',
      tags: ['PROGRAM ASST.'],
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 4,
      name: 'Ava Ramirez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 5,
      name: 'Caleb Nguyen',
      role: 'Admin, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 6,
      name: 'Chloe Kim',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 7,
      name: 'Jackson Robinson',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 8,
      name: 'Sophia Singh',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 9,
      name: 'Liam Davis',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 10,
      name: 'Emma Hernandez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 11,
      name: 'Sophia Singh',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 12,
      name: 'Liam Davis',
      role: 'Program Assistant, Andela, Him/he',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
    {
      id: 13,
      name: 'Emma Hernandez',
      role: 'Program Assistant, Andela, She/her',
      tags: ['PROGRAM ASST.', 'MENTOR-GADS'],
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      dateAdded: 'Added 0ct. 10 2022',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, justo ut consectetur bibendum, lorem lectus pellentesque nisi, a dapibus neque elit vel dolor. Ves',
    },
  ];
  return (
    <div className="grid grid-cols-cert gap-x-5 h-full">
      {/* left grid */}
      <section className="h-full overflow-y-auto scroll pr-[10px] pb-20">
        {/* select beneficiary */}
        <div className="flex justify-between items-center border-black9 border-[1px] rounded-[5px] px-10 mb-[30px] h-min py-4">
          <p className="text-[20px] font-[400] text-black2">
            Select a Beneficiary
          </p>
          <button
            type="submit"
            className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri2 text-pri11 text-[10px] hover:bg-pri1 mr-[15px]"
            onClick={() => {
              //   setProgramsOpen(false);
              setMentorsOpen(true);
            }}
            onKeyDown={() => {
              //   setProgramsOpen(false);
              setMentorsOpen(true);
            }}
          >
            Select
          </button>
        </div>
        {/* select program */}
        <div className="flex justify-between items-center border-black9 border-[1px] rounded-[5px] px-10 mb-[30px] h-min py-4">
          <p className="text-[20px] font-[400] text-black2">Select a Program</p>
          <button
            type="submit"
            className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri2 text-pri11 text-[10px] hover:bg-pri1 mr-[15px]"
          >
            Select
          </button>
        </div>

        {/* certificate preview */}
        <div className="flex items-center justify-center h-[300px] border-black9 border-[1px] rounded-[5px]">
          <p className="text-black8 text-[20px] font-[400]">
            Certificate Preview
          </p>
        </div>

        <button
          className="bg-pri3 py-3 mt-5 flex items-center justify-center text-white duration-700 text-[16px] font-[600] text-mukta hover:bg-pri2 rounded-[10px] px-10"
          type="button"
        >
          Generate
        </button>
      </section>

      <section
        className={`h-full overflow-y-auto scroll ${
          mentorsOpen ? '' : 'hidden'
        }`}
      >
        {/* search */}

        <div className="flex justify-between">
          <RiSearchLine className="text-pri3 text-2xl mx-2" />
          <input
            type="text"
            className="focus:outline-none bg-transparent pl-4 w-full placeholder:text-pri3 text-pri3"
            placeholder={`${
              mentorsOpen ? 'Select Mentors' : 'Select Programs'
            }`}
            onChange={(e) => handleChange(e)}
            value={searchText}
          />
          <AiOutlineClose
            className="text-teal-700 text-md mt-1 mx-2 cursor-pointer"
            onClick={() => {
              setMentorsOpen(false);
              //   setmentorsmanagersOpen(false);
            }}
          />
        </div>
        {mentorsList
          .filter((x) => x.name.toLowerCase().includes(searchText.toLowerCase()))
          .map((item) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              className="task flex m-3 p-3 rounded-md items-center border-2
              border-grey-400 cursor-pointer flex-row max-lg:flex-col
               max-lg:justify-self-start max-lg:justify-items-start"
              key={item.id}
            >
              <img
                src={item.url}
                alt=""
                className="w-[50px] h-[50px] object-cover object-top rounded-full"
              />

              <div className="rightTask ms-4 grow max-lg:w-full max-lg:mb-3">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="taskdate flex">
                  <p className="text-xs text-gray-600 font-light align-middle">
                    {item.role}
                  </p>
                </div>
                {item.tags.map((role, index) => (
                  <span
                    className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1"
                    key={index}
                  >
                    {role}
                  </span>
                ))}
              </div>

              {selectedMentors.some((i) => i.id === item.id) ? (
                <AiOutlineCheck className="text-teal-700 text-2xl mx-2 cursor-pointer" />
              ) : (
                <BsPlusCircle
                  className="text-teal-700 text-2xl mx-2 cursor-pointer"
                  onClick={() => pushMentors(item)}
                  onKeyDown={() => pushMentors(item)}
                  role="button"
                  tabIndex={0}
                />
              )}
            </div>
          ))}
      </section>
    </div>
  );
}

export default GenerateNewCertificate;
