import React from 'react';
import { BackIcon,
  DoubleBackIcon,
  DoubleNextIcon,
  NextIcon,
  TickIcon } from '../../../assets/images';
import NotificationCards from '../../../components/Dashboard/Notification/NotificationCards';
import MentorFilterDropdown from '../../../components/utilities/DropdownMentors';

function AllNotifications() {
  const notifications = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      actor: 'Lex Murphy',
      action: 'requested approval for Gads Certificate  by',
      object: 'Roseline Anapuna',
      date: 'Today at 9:42 AM',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      actor: 'Peculiah C. Umeh',
      action: 'commented on',
      object: 'How to Archive a Program on MMS',
      date: 'Yesterday at 11:52 PM',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      actor: 'Baba C. Mammah',
      action: 'created',
      object: 'All Mentor Managers Task Report',
      date: 'Today at 9:42 AM',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80',
      actor: 'Alison Debby Davis',
      action: 'Shared',
      object: 'Jacobs Raphael’s Mentor’s Report',
      date: 'Today at 9:42 AM',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
      actor: 'Kabiru Omo Isaka',
      action: 'Archived',
      object: 'Luke Matthais Mentor Manager’s Report',
      date: 'Today at 9:42 AM',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      actor: 'Ferdinand Johnson',
      action: 'Created',
      object: 'All Mentor Managers Task Report',
      date: 'Today at 9:42 AM',
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      actor: 'Lex Murphy',
      action: 'requested approval for Gads Certificate  by',
      object: 'Roseline Anapuna',
      date: 'Today at 9:42 AM',
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      actor: 'Lex Murphy',
      action: 'requested approval for Gads Certificate  by',
      object: 'Roseline Anapuna',
      date: 'Today at 9:42 AM',
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      actor: 'Lex Murphy',
      action: 'requested approval for Gads Certificate  by',
      object: 'Roseline Anapuna',
      date: 'Today at 9:42 AM',
    },
  ];

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
      <h1 className="font-[600] text-[22px] text-black1">Notifications</h1>
      <section className="flex items-center justify-between my-5">
        <MentorFilterDropdown options={filterOptions} placeHolder="All" />
        {/* back and double back buttons */}
        <div className="flex items-center">
          <div className="flex items-center mr-[30px]">
            <p className="font-[600] text-[14px] text-black2 mr-2">
              Mark as read
            </p>
            <TickIcon color="#808080" />
          </div>
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
        {notifications.map((item) => (
          <NotificationCards key={item.id} notification={item} />
        ))}
      </section>
    </div>
  );
}

export default AllNotifications;
