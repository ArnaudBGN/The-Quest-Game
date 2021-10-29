import React from 'react';
import './style/Modal.css';

function Modal({ revele, cache }) {
  return revele ? (
    <React.Fragment>
      <div className="overlay" />
      <div className="wrapper">
        <div className="modal">
          <div className="modalHeader">
            <button type="button" className="close" onClick={cache}>
              X
            </button>
          </div>
        </div>

        <label htmlform="name" htmlFor="name">
          Enter your Name
        </label>
        <input type="texte" id="name" name="name" />
        <button>Next</button>
      </div>
    </React.Fragment>
  ) : null;
}

export default Modal;
