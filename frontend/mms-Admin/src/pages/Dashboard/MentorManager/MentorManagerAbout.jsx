import React from 'react';
import { DocsIcon } from '../../../assets/images';

function MentorManagerAbout() {
  const infos = [
    {
      id: 1,
      title: 'Technical Proficiency',
      detail: 'Java Script, Django, Mysql, Android',
    },
    {
      id: 2,
      title: 'Previous Programs',
      detail: 'GADS 2022, Google I/O Extended 2021',
    },
    {
      id: 3,
      title: 'Previous Programsy',
      detail: 'GADS 2022, Google I/O Extended 2021',
    },
    {
      id: 4,
      title: 'Availability to join a new program:',
      detail: 'Unavailable',
    },
    {
      id: 5,
      title: 'Program of interest',
      detail: 'Google Africa Scholarship Program',
    },
    {
      id: 6,
      title: 'Been a Mentor Before?',
      detail: 'Yes',
    },
    {
      id: 7,
      title: 'Years of Technical Experience:',
      detail: '3 years',
    },
  ];
  return (
    <div className="border-[1px] border-black9 rounded-[10px] h-full px-5 pt-5 mb-[300px]">
      {/* bio section */}
      <div className="w-full mb-[20px]">
        <h3 className="text-[20px] font-[600] text-black2">Bio</h3>
        <div className="border-[1px] border-pri10 bg-pri11 text-black3 text-[16px] font-[400] p-[10px] mt-[5px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eum laudantium blanditiis provident, quaerat rem
            adipisci minima nostrum fuga voluptatem, ipsam cum quibusdam ipsa
            debitis porro officia vitae. Porro, in.
          </p>
        </div>
      </div>
      <div className="h-full">
        {infos.map((item) => (
          <p
            className="text-black2 font-[600] text-[20px] mb-[17px]"
            key={item.id}
          >
            {item.title}
            {' '}
            <span className="text-[16px] font-[400] text-black5">
              {item.detail}
            </span>
          </p>
        ))}
        <p className="text-black2 font-[600] text-[20px] mb-[17px]">
          Documents
          <br />
          <div className="flex">
            <span className="text-[16px] font-[400] text-black5 flex items-center mr-3">
              <DocsIcon styling="mr-2" />
              {' '}
              My resume.doc
            </span>
            <span className="text-[16px] font-[400] text-black5 flex items-center mr-3">
              <DocsIcon styling="mr-2" />
              {' '}
              Birth Cerificate.doc
            </span>
            <span className="text-[16px] font-[400] text-black5 flex items-center mr-3">
              <DocsIcon styling="mr-2" />
              {' '}
              Java Lead.doc
            </span>
          </div>
        </p>

        <p className="font-[600] text-[20px] text-black3 mt-[17px]">Website: www.kabir.i@andela.com</p>
      </div>
    </div>
  );
}

export default MentorManagerAbout;
