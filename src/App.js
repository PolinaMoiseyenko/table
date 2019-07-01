import React from 'react';
import './App.css';
import Main from './Main';
import Home from './Home/Home';
import User from './Home/User';
import Profile from './Home/Profile';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
          <Router>
            <Route exact path="/" component={Main} />
            <Route  path="/home/" component={Home} />
            <Route  path="/user/:id" component={User} />
            <Route  path="/profile/" component={Profile} />
          </Router>
    );
  }
}

export default App;
