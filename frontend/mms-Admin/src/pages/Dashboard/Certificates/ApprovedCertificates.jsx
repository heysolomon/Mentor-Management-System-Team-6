import React from 'react';
import { Link } from 'react-router-dom';
import { BackIcon,
  CustomSearchIcon,
  DoubleBackIcon,
  DoubleNextIcon,
  FilterIcon,
  NextIcon } from '../../../assets/images';
import CertificatesCard from '../../../components/Dashboard/Certificates/CertificatesCard';

function ApprovedCertificates() {
  const mentorsList = [
    {
      id: 1,
      name: 'Alison Davis',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 2,
      name: 'Olivia Cooper',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 3,
      name: 'Emma Patel',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 4,
      name: 'Pete Ramirez',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 5,
      name: 'Caleb Nguyen',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 6,
      name: 'Chloe Kim',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 7,
      name: 'Jackson Robinson',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 8,
      name: 'Sophia Singh',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 9,
      name: 'Liam Davis',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 10,
      name: 'Emma Hernandez',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 11,
      name: 'Sophia Singh',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 12,
      name: 'Liam Davis',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
    {
      id: 13,
      name: 'Emma Hernandez',
      role: 'GADS CLOUD 2022 - COMPLETION',
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-[600] text-[22px] text-black1">
          Approved Certificates
        </h1>
        {/* send broadcast, Add new mentor next buttons */}
        <section className="flex items-center">
          <div className="flex items-center">
            <Link to="/admin-dashboard/certificates/generate-new-certificate">
              <button
                type="submit"
                className="h-[24px] rounded-[5px] flex items-center justify-center px-3 border-[1px] border-pri3 duration-200 bg-pri3 text-pri11 text-[10px] hover:bg-pri2 mr-[15px]"
              >
                Generate New Certificate
              </button>
            </Link>
          </div>

          {/* back and double back buttons */}
          <div className="flex items-center">
            <button type="button">
              <BackIcon color="#058B94" styling="w-[20px]" />
            </button>
            <button type="button">
              <DoubleBackIcon color="#058B94" styling="w-[20px]" />
            </button>
          </div>
          {/* number of pages  */}
          <div className="flex items-center justify-center">
            <p className="font-[600] text-[14px] text-black2">1 - 10 of 20</p>
          </div>
          <div className="flex items-center">
            <button type="button">
              <NextIcon color="#058B94" styling="w-[20px]" />
            </button>
            <button type="button">
              <DoubleNextIcon color="#058B94" styling="w-[20px]" />
            </button>
          </div>

          <button type="submit" className="mx-5">
            <CustomSearchIcon color="#058B94" styling="w-[20px]" />
          </button>

          <button className="" type="button">
            <FilterIcon color="#058B94" styling="w-[20px]" />
          </button>
        </section>
      </div>
      <div className="h-full mt-3 overflow-y-auto scroll pr-[10px] pb-[300px]">
        {mentorsList.map((i) => (
          <CertificatesCard certificate={i} key={i.id} />
        ))}
      </div>
    </>
  );
}

export default ApprovedCertificates;
