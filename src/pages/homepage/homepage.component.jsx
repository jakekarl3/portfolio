import React from 'react';
import { Element } from 'react-scroll';

// COMPONENTS
import Navigation from '../../components/navigation/navigation.component';
import Landing from '../../components/landing/landing.component';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
import AboutMe from '../../components/about-me/about-me.component';
import ProjectGallery from '../../components/project-gallery/project-gallery.component';

// STYLES
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Navigation />
    <Element name="section-landing">
      <Landing />
    </Element>
    <Element name="section-blog">
      <div className="section-blog">
        <BlogPreview />
        <a href="#" className="btn-view-all">View all</a>
      </div>
    </Element>
    <Element name="section-about-me">
      <div className="section-about-me">
        <AboutMe />
      </div>
    </Element>
    <Element name="section-projects">
      <div className="section-projects">
        <ProjectGallery />
      </div>
    </Element>
  </div>
);

export default HomePage;