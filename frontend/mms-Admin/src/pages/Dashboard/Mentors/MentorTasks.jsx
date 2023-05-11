import React from 'react';
import { CustomSearchIcon } from '../../../assets/images';
import MentorTasksCard from '../../../components/Dashboard/Mentors/MentorTasksCard';
import MentorFilterDropdown from '../../../components/utilities/DropdownMentors';

function MentorTasks() {
  const filterOptions = [
    {
      value: 'week',
      label: 'This week',
    },
    {
      value: 'month',
      label: 'This month',
    },
    {
      value: 'year',
      label: 'This year',
    },
  ];

  const tasks = [
    {
      id: 1,
      tasksTitle: 'Room liberary article write...',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque',
    },
    {
      id: 2,
      tasksTitle: 'Room liberary article write...',
      body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 3,
      tasksTitle: 'Room liberary article write...',
      body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 4,
      tasksTitle: 'General Frequently Asked Question?',
      body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 5,
      tasksTitle: 'Room liberary article write...',
      body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 6,
      tasksTitle: 'Room liberary article write...',
      body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
  ];
  return (
    <div className="h-full overflow-y-auto scroll pr-[10px] pb-[300px]">
      <div className="flex justify-between mb-5">
        <MentorFilterDropdown options={filterOptions} placeHolder="All Tasks" />

        <div className="hidden md:flex items-center bg-white h-[28px] w-[50%] rounded-[5px] py-4 text-black8 font-[400] text-[16px] border-[1px] border-black8">
          <CustomSearchIcon color="#CCCCCC" styling="ml-5" />
          <input
            type="text"
            className="focus:outline-none bg-transparent pl-5 w-full placeholder:text-black8"
            placeholder="Search for Tasks"
          />
        </div>
      </div>
      {tasks.map((task) => (
        <MentorTasksCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default MentorTasks;
