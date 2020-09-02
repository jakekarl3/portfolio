import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// STYLES
import './App.css';

// PAGES
import HomePage from './pages/homepage/homepage.component';
import BlogsPage from './pages/blogs/blogs.component';
import SignInPage from './pages/sign-in/sign-in.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blogs" component={BlogsPage} />
            <Route path="/signin" component={SignInPage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
