import React from 'react';

// COMPONENTS
import ProjectCard from '../project-card/project-card.component';

// STYLES
import './project-gallery.styles.scss';

const ProjectGallery = () => (
  <div className="project-gallery">
    <ProjectCard />
    <ProjectCard />
  </div>
);

export default ProjectGallery;