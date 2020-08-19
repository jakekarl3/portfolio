import React from 'react';

// COMPONENTS
import Blog from '../../components/blog/blog.component';

// STYLES
import './blog-preview.styles.scss';

// IMAGES
import cubs from '../../assets/cubs-hat.jpg';
import work from '../../assets/work.jpg';
import sky from '../../assets/sky.jpg';
import football from '../../assets/football.jpg';
import waterfall from '../../assets/waterfall.jpg';
import baseball from '../../assets/baseball.jpg';
import desk from '../../assets/desk.jpg';
import chicago from '../../assets/chicago.jpg';

const BlogPreview = () => (
  <div className="blog-preview">
    <Blog
      category="sports"
      image={cubs}
      date="Jul 24, 2020"
      title="Time for another run at the title"
    />
    <Blog
      category="tech"
      image={work}
      date="Jul 14, 2020"
      title="The work from home life"
    />
    <Blog
      category="travel"
      image={sky}
      date="Jun 22, 2020"
      title="Shoot for the stars"
    />
    <Blog
      category="sports"
      image={football}
      date="Jun 18, 2020"
      title="College football really gonna happen?"
    />
    <Blog
      category="travel"
      image={waterfall}
      date="May 30, 2020"
      title="Philippines Waterfall"
    />
    <Blog
      category="sports"
      image={baseball}
      date="May 28, 2020"
      title="Baseball is back"
    />
    <Blog
      category="tech"
      image={desk}
      date="Apr 10, 2020"
      title="New desk"
    />
    <Blog
      category="travel"
      image={chicago}
      date="Apr 4, 2020"
      title="Sweet home Chicago"
    />
  </div>
);

export default BlogPreview;