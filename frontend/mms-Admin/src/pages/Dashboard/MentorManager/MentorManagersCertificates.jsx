import React from 'react';
import MertorCertificateCard from '../../../components/Dashboard/Mentors/MentorCertificateCard';

function MentorManagersCertificates() {
  const tasks = [
        {
          id: 1,
          tasksTitle: 'GADS CLOUD 2022 - COMPLETION',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque',
        },
        {
          id: 2,
          tasksTitle: 'GADS CLOUD 2022 - COMPLETION',
          body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu`,
        },
        {
          id: 3,
          tasksTitle: 'GADS CLOUD 2022 - COMPLETION',
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
          tasksTitle: 'GADS CLOUD 2022 - COMPLETION',
          body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu`,
        },
        {
          id: 6,
          tasksTitle: 'GADS CLOUD 2022 - COMPLETION',
          body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu`,
        },
  ];
  return (
    <div className="h-full overflow-y-auto scroll pr-[10px] pb-[300px]">
      {tasks.map((task) => (
        <MertorCertificateCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default MentorManagersCertificates;
