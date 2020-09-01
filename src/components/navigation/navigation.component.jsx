import React from 'react';
import { Link } from 'react-scroll';

// STYLES
import './navigation.styles.scss';

class Navigation extends React.Component {
  state = {
    border: "top-border",
    navbar: "navigation"
  }

  listenScrollEvent = e => {
    if (window.scrollY > 0) {
      this.setState({
        border: "top-border active",
        navbar: "navigation active blue-nav"
      }) 
    } else {
      this.setState({
        border: "top-border",
        navbar: "navigation"
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className="fs-sm">
        <div className={this.state.border}></div>
        <div className={this.state.navbar}>
          <div className="navigation__item">
            <a href="/">Home</a>
          </div>
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
          <Link
            to="section-contact"
            smooth={true}
            duration={500}
          >
            <div className="navigation__item">Contact</div>
          </Link>
        </div>
      </div>
    )
  }
};

export default Navigation;