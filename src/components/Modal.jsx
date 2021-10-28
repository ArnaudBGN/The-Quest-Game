import React from 'react';

function Modal({ revele, cache }) {
  return revele ? (
    <React.Fragment>
      <div className="modal">
        <div className="modalHeader">
          <button type="button" className="close" onClick={cache}>
            X
          </button>
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
