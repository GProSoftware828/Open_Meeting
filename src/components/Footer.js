import React from 'react';
import './componentStyles.css';

const Footer = () => {
  return (
    <div className="flex-container">
      <div>
        Members of a meeting login to list their topics to discuss anonymously.
      </div>
      <div>Courtesy of: George Payne using open source software</div>
      <div>React Fullstack (Serverless) on Firebase</div>
      <div>Copyright March 2020</div>
    </div>
  );
};

export default Footer;
