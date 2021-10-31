import React from 'react';
import styles from './style/Modal.module.css';

function Modal({ revele, hide, goToCharacterSelect, setUserName }) {
  const handleChange = (e) => setUserName(e.target.value);

  return revele ? (
    <React.Fragment>
      <div className={styles.overlay} />
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button type="button" className={styles.close} onClick={hide}>
              X
            </button>
          </div>
        </div>

        <label className={styles.labelName} htmlform="name" htmlFor="name">
          Enter your Name
        </label>
        <input type="texte" id="name" name="name" onChange={handleChange} />
        <button className={styles.NextButton} onClick={goToCharacterSelect}>
          Next
        </button>
      </div>
    </React.Fragment>
  ) : null;
}

export default Modal;
