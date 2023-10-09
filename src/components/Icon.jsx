import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

function Icon({ word, onIconClick }) {
  const handleIconClick = () => {
    onIconClick(word.word);
  };

  return (
    <div className="icon" onClick={handleIconClick}>
      <FontAwesomeIcon icon={faVolumeUp} />
    </div>
  );
}

export default Icon;
