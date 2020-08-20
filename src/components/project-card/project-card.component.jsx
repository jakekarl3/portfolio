import React from 'react';

import './project-card.styles.scss';

const ProjectCard = () => (
  <div className="card">
    <div className="card__details">
      <div className="card__title">Title</div>
      <div className="card__description">
        Vitae, semper arcu egestas elementum tellus facilisi enim, lectus ullamcorper. Scelerisque euismod vel hac leo, lacinia consequat. Purus egestas sed at dui vel lorem condimentum fermentum augue. Purus enim etiam bibendum convallis id pretium, imperdiet. A, a bibendum viverra porta sed morbi feugiat imperdiet consequat.
      </div>
      <div className="card__tech">
        Semper • Arcu • Egestas • Elementum
      </div>
    </div>
    <div className="card__image">
    </div>
  </div>
);

export default ProjectCard;