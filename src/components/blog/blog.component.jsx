import React from 'react';

// STYLES
import './blog.styles.scss';

const Blog = ({ category, image, date, title }) => (
  <div className="blog mb-l">
    {/* <img className="blog__image" src={} alt="blog" /> */}
    <div className="blog__image">Image</div>
    {/* <img className="blog__image" src={image} alt="blog" /> */}
    <div className="blog__textbox mt-s fs-xs">
      <div className="blog__textbox--details mb-xs">
        <div className="date">{date}</div>
        <div className="category ph-s">{category}</div>
      </div>
      <div className="blog__textbox--title mt-xs fw-6">{title}</div>
    </div>
  </div>
);

export default Blog;