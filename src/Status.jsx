import React from 'react';

import Online from './Online.jsx';
import Offline from './Offline.jsx';

import './status.scss';

const Status = ({ isOnline }) => {
  return isOnline
    ? <Online />
    : <Offline />;
};

export default Status;

