import React from 'react';

// STYLES
import './App.css';

// PAGES
import HomePage from './pages/homepage/homepage.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
