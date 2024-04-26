import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

const Subscribe = () => {
  const buttons = [
    { label: 'Current Affairs', link: '/GROUP2' },
    { label: 'Test series', link: '/GROUP2' },
    { label: 'Question Papers', link: '/GROUP2' },
    { label: 'Ploity', link: '/GROUP2' },
    { label: 'Videos', link: '/GROUP2' },
    { label: 'Mock tests', link: '/GROUP2' }
  ];

  const history = useHistory(); // Initialize useHistory

  // Function to navigate to a new page
  const navigateTo = (link) => {
    history.push(link); // Use history to navigate to the specified link
  };

  return (
    <div className="button-container">
      <div className="button-group">
        {buttons.slice(0, 3).map((button, index) => (
          <button key={index} onClick={() => navigateTo(button.link)} className="button">
            <a href="#" className="button-link">{button.label}</a>
          </button>
        ))}
      </div>
      <div className="button-group button-group-right">
        {buttons.slice(3, 6).map((button, index) => (
          <button key={index + 3} onClick={() => navigateTo(button.link)} className="button">
            <a href="#" className="button-link">{button.label}</a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
