import React from 'react';

// STYLES
import './blog.styles.scss';

const Blog = ({ category, image, date, title }) => (
  <div className="blog">
    {/* <img className="blog__image" src={} alt="blog" /> */}
    <div className="blog__image">Image</div>
    {/* <img className="blog__image" src={image} alt="blog" /> */}
    <div className="blog__textbox">
      <div className="blog__textbox--details">
        <div className="date">{date}</div>
        <div className="category">{category}</div>
      </div>
      <div className="blog__textbox--title">{title}</div>
    </div>
  </div>
);

export default Blog;