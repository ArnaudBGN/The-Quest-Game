import React from 'react';
import Modal from './Modal';

import styles from './style/UserNameDialog.module.css';

function UserNameDialog({ revele, toggle, goToCharacterSelect, setUserName }) {
  return (
    <div className={styles.UserNameDialog}>
      <Modal revele={revele} toggle={toggle} goToCharacterSelect={goToCharacterSelect} setUserName={setUserName} />
    </div>
  );
}

export default UserNameDialog;
