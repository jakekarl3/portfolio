import React from 'react';

import { HeaderContainer } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <div className="header-item">Home</div>
    <div className="header-item">About</div>
    <div className="header-item">Projects</div>
    <div className="header-item">Skills</div>
    <div className="header-item">Thoughts</div>
  </HeaderContainer>
);

export default Header;