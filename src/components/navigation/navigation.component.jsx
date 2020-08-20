import React from 'react';
import { Link } from 'react-scroll';

// STYLES
import './navigation.styles.scss';

class Navigation extends React.Component {
  state = {
    class: "navigation"
  }

  listenScrollEvent = e => {
    if (window.scrollY > 0) {
      this.setState({
        class: "active-navigation"
      }) 
    } else {
      this.setState({
        class: "navigation"
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className={this.state.class}>
        <Link
          to="section-landing"
          smooth={true}
          duration={500}
          offset={-30}
        >
          <div className="navigation__item active">Home</div>
        </Link>
        <Link
          to="section-blog"
          smooth={true}
          duration={500}
        >
          <div className="navigation__item">Thoughts</div>
        </Link>
        <Link
          to="section-about-me"
          smooth={true}
          duration={500}
        >
          <div className="navigation__item">About Me</div>
        </Link>
        <Link
          to="section-projects"
          smooth={true}
          duration={500}
        >
          <div className="navigation__item">Projects</div>
        </Link>
        <Link>
          <div className="navigation__item">Contact</div>
        </Link>
      </div>
    )
  }
};

export default Navigation;