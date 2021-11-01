import React from 'react';
import Modal from './Modal';

function UserNameDialog({ revele, toggle, goToCharacterSelect, setUserName }) {
  return (
    <div>
      <Modal revele={revele} toggle={toggle} goToCharacterSelect={goToCharacterSelect} setUserName={setUserName} />
    </div>
  );
}

export default UserNameDialog;
