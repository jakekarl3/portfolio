import React from 'react';

import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

// STYLES
import './landing.styles.scss';

const Landing = () => (
  <div className="landing">
    <div className="landing__textbox">
      <div className="landing__textbox--title fs-xl fw-3">Jake Karl</div>
      <div className="landing__textbox--description mt-xl fs-m fw-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra.
      </div>
      <div className="landing__textbox--social mt-l">
        <a className="mh-xs" href="https://www.linkedin.com/in/jakekarl/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="linkedIn logo" />
        </a>
        <a className="mh-xs" href="https://github.com/jakekarl3" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github logo" />
        </a>
        <a className="mh-xs" href="https://twitter.com/jakeakarl" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter logo" />
        </a>
        <a className="mh-xs" href="https://www.instagram.com/jakarl/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram logo" />
        </a>
      </div>
    </div>
  </div>
);

export default Landing;