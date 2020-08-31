import React from 'react';
import { Element } from 'react-scroll';

// COMPONENTS
import Landing from '../../components/landing/landing.component';
import BlogGallery from '../../components/blog-gallery/blog-gallery.component';
import AboutMe from '../../components/about-me/about-me.component';
import ProjectGallery from '../../components/project-gallery/project-gallery.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';

// STYLES
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Element name="section-landing">
      <div className="section-landing">
        <Landing />
      </div>
    </Element>
    <Element name="section-blog">
      <div className="section-blog">
        <BlogGallery />
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
    <Element name="section-contact">
      <div className="section-contact">
        <Contact />
      </div>
    </Element>
    <Element>
      <div className="section-footer">
        <Footer />
      </div>
    </Element>
  </div>
);

export default HomePage;