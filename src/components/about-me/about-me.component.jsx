import React from 'react';

import './about-me.styles.scss';

const AboutMe = () => (
  <div className="about-me">
    <div className="profile-image"></div>
    <div className="textbox">
      <h2>About Me</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra.
      </h3>
      <h2>Skills</h2>
      <h3>
        HTML • CSS • JS • ES6 • Sass • Bootstrap<br />
        Mongo • Express • React • Redux • Node • NPM<br />
        Apex • Lightning Web Components • <br />
        Heroku • Git • Github • Agile • Trello
      </h3>
    </div>
  </div>
);

export default AboutMe;