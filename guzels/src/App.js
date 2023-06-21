import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProductPage from './ProductPage';
import AboutPage from './AboutPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <h1>Welcome to our E-commerce Website!</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={ProductPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </main>
        <footer className="App-footer">
          <p>&copy; 2023 Your E-commerce Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
