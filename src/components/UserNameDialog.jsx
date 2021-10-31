import React from 'react';
import Modal from './Modal';

function UserNameDialog({ revele, toggle, goToCharacterSelect }) {
  return (
    <div>
      <Modal revele={revele} toggle={toggle} goToCharacterSelect={goToCharacterSelect} />
    </div>
  );
}

export default UserNameDialog;
