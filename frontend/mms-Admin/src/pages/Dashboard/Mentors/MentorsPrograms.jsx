import React from 'react';
import MentorProgramCard from '../../../components/Dashboard/Mentors/MentorProgramCard';

function MentorsPrograms() {
  const programs = [
    {
      id: 1,
      programTitle: 'Google Africa Scholarship Program',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque',
    },
    {
      id: 2,
      programTitle: 'Google Africa Scholarship Program',
      answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 3,
      programTitle: 'Google Africa Scholarship Program',
      answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 4,
      programTitle: 'General Frequently Asked Question?',
      answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 5,
      programTitle: 'Google Africa Scholarship Program',
      answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
    {
      id: 6,
      programTitle: 'Google Africa Scholarship Program',
      answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu`,
    },
  ];
  return (
    <div className="h-full overflow-y-auto scroll pr-[10px] pb-[300px]">
      {programs.map((program) => (
        <MentorProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}

export default MentorsPrograms;
