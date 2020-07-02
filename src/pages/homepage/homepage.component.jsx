import React from 'react';

// STYLES
// import { HomePageContainer } from './homepage.styles';
import './homepage.styles.scss';

// ICONS
import {ReactComponent as HTML5Logo } from '../../assets/html-5.svg';

// COMPONENTS
// import Header from '../../components/header/header.component';

const HomePage = () => (
  // <HomePageContainer>
  //   <Header />

  // </HomePageContainer>
  <div className="homepage">
    <div className="header">
      <div className="header-item">HOME</div>
      <div className="header-item">ABOUT</div>
      <div className="header-item">PROJECTS</div>
      <div className="header-item">THOUGHTS</div>
    </div>
    <div className="blog-container column">
      <div className="title">BLOGS</div>
    </div>
    <div className="about-me-container column">
      <div className="profile-image">
        <img src={require('../../assets/profile-image.jpg')} alt="Profile"/>
      </div>
      <div className="about-me-details">
        <div className="title">ABOUT ME</div>
        <div className="about-me_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra.
        </div>
        <div className="about-me_contact-info">
          <div className="email">jakekarl3@gmail.com</div>
          <div className="city">Lisle, IL</div>
          <div className="phone">630 730 7041</div>
        </div>
      </div>
    </div>
    <div className="skills-container column">
      <div className="title">SKILLS</div>
      <HTML5Logo />
    </div>
    <div className="projects-container column">
      <div className="title">PROJECTS</div>
      <div className="project-list">
        <div className="project">
          <div className="project-image"></div>
          <div className="project-name">PROJECT 1</div>
          <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed.</div>
        </div>
        <div className="project">
          <div className="project-image"></div>
          <div className="project-name">PROJECT 2</div>
          <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed.</div>
        </div>
        <div className="project">
          <div className="project-image"></div>
          <div className="project-name">PROJECT 3</div>
          <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed.</div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;