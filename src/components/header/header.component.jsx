import React from 'react';
import { Link } from 'react-scroll';

// STYLES
import './header.styles.scss';

class Header extends React.Component {

  state = {
    navClass: ""
  }

  listenScrollEvent = e => {
    if (window.scrollY > 0) {
      this.setState({
        navClass: "nav-blue"
      });
    } else {
      this.setState({
        navClass: ""
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  
  render() {
    const { navClass } = this.state;

    return (
      <div className="header fs-sm">
        <div className="page-margin"></div>
        <div className={`nav ${navClass}`}>
          <a href="/">
            <div className="nav__item">
              Home
            </div>
          </a>
          <Link
            to="section-blog"
            smooth={true}
            duration={500}
          >
            <div className="nav__item">Thoughts</div>
          </Link>
          <Link
            to="section-about-me"
            smooth={true}
            duration={500}
          >
            <div className="nav__item">About Me</div>
          </Link>
          <Link
            to="section-projects"
            smooth={true}
            duration={500}
          >
            <div className="nav__item">Projects</div>
          </Link>
          <Link
            to="section-contact"
            smooth={true}
            duration={500}
          >
            <div className="nav__item">Contact</div>
          </Link>
        </div>
      </div>
    )
  }
};

export default Header;