import React from 'react';
import Modal from './Modal';

function UserNameDialog({ revele, toggle }) {
  return (
    <div>
      <Modal revele={revele} cache={toggle} />
    </div>
  );
}

export default UserNameDialog;
