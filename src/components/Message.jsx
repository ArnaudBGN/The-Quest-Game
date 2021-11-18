import React, { useMemo } from 'react';
import { animated, useTransition } from 'react-spring';

import styles from './style/Message.module.css';

function Message({ message }) {
  const items = useMemo(
    () =>
      message.split('').map((letter, index) => ({
        letter: letter,
        key: index,
      })),
    [message],
  );

  const transitions = useTransition(items, {
    from: { display: 'none' },
    enter: { display: '' },
    trail: 50,
    keys: (item) => item.key,
  });

  return (
    <div className={styles.MessageText}>
      {transitions(({ display, key }, item) => (
        <animated.span
          key={key}
          style={{
            display: display,
          }}
        >
          {item.letter}
        </animated.span>
      ))}
    </div>
  );
}

export default Message;
