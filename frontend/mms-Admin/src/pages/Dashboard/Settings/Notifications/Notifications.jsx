import React from 'react';
import './Notifications.css';
import Toggle from '../../../../components/Toggle';

function Notifications() {
  return (
    <div className="Notifications">
      <h1 className="font-[600] NotificationsH">General Notifications</h1>
      {/* start row */}
      <div className="grid grid-flow-row-dense grid-cols-4 gap-4">
        <div className=" col-span-2" />
        <div className="grid grid-flow-row-dense grid-cols-2 gap-1">
          <div className="head">Email</div>
          <div className="head">In-app</div>
        </div>
        <div className="" />
      </div>
      {/* end row */}
      {/* start row */}
      <div className="grid grid-flow-row-dense grid-cols-4 gap-4">
        <div className="col-span-2"><p className="subHead">All Notifications</p></div>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-1">
          <div className="head"><Toggle enabled={false} /></div>
          <div className="head">In-app</div>
        </div>
        <div className="" />
      </div>
      {/* end row */}

    </div>
  );
}

export default Notifications;
