import React from 'react';
import ApprovalRequestProgramCard from '../../../components/Dashboard/ApprovalRequests/ApprovalRequestProgramCard';

function ApprovalRequestPrograms() {
  const programs = [
    {
      id: 1,
      name: 'Google Developer Scholarship',
      programs: '6',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 2,
      name: 'Google Developer Scholarship',
      programs: '10',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 3,
      name: 'Google Developer Scholarship',
      programs: '0',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 4,
      name: 'Google Developer Scholarship',
      programs: '30',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 5,
      name: 'Google Developer Scholarship',
      programs: '0',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 6,
      name: 'Google Developer Scholarship',
      programs: '1',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 7,
      name: 'Google Developer Scholarship',
      programs: '10',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 8,
      name: 'Google Developer Scholarship',
      programs: '10',
      url: 'https://images.unsplash.com/photo-1685342412806-c7f4c4fa9215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
  ];
  return (
    <>
      <h1 className="font-[600] text-[22px] text-black1">Program Requests</h1>
      <div className="h-full mt-5 overflow-y-auto scroll pr-[10px] pb-[300px]">
        {programs.map((i) => (
          <ApprovalRequestProgramCard program={i} key={i.id} />
        ))}
      </div>
    </>
  );
}

export default ApprovalRequestPrograms;
