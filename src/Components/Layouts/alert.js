import React from 'react';

const Alert = ({ Alert }) => {
  return Alert !== null ? (
    <div className={`alert alert-${Alert.type}`}>
      <i className='fas fa-info-circle' /> {Alert.msg}
    </div>
  ) : (
    ''
  );
};

export default Alert;
