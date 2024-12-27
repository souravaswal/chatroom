import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Welcome to the Party! <span role="img" aria-label="emoji">🎉</span></h1>
      <h2>Chat like nobody's watching! <span role="img" aria-label="emoji">👀</span></h2>
      <h2>Jump in, the water's warm! <span role="img" aria-label="emoji">🏖️</span></h2>
    </div>
    {
            users && users.length > 0 ? (
              <div>
                <h1>Who's in the room? <span role="img" aria-label="emoji">🕵️‍♂️</span></h1>
                <div className="activeContainer">
                  <h2>
                    {users.map(({ name }) => (
                      <div key={name} className="activeItem">
                        {name} <img alt="Online Icon" src={onlineIcon} />
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            ) : (
              <div>
                <h2>Looks like you're the first one here! <span role="img" aria-label="emoji">🙋‍♂️</span></h2>
                <h3>Start the fun and wait for others to join! <span role="img" aria-label="emoji">⏳</span></h3>
              </div>
            )
        }
  </div>
);

export default TextContainer;
