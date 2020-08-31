import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Navigation from './components/navigation/navigation.component';

// STYLES
import './App.css';

// PAGES
import HomePage from './pages/homepage/homepage.component';
import Blogs from './pages/blogs/blogs.component.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blogs" component={Blogs} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
