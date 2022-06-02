import React from 'react';

import './status.scss';

const Status = ({ isOnline }) => {
  if (isOnline) {
    return (
      <div className="status">
        <span className="status__text">All good!</span>
      </div>
    );
  }
  
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn">Reconnect</button>
    </div>
  )
};

export default Status;

