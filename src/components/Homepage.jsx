import React from 'react';
import { useState } from 'react';
import UserNameDialog from './UserNameDialog';

function Homepage() {
  const [revele, changeRevele] = useState(false);
  function toggle() {
    changeRevele(!revele);
  }
  return (
    <div>
      <button className="button" onClick={toggle}>
        PLAY
      </button>
      <UserNameDialog revele={revele} cache={toggle} />
    </div>
  );
}

export default Homepage;
