import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap-lux.min.css'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>

          <Route path="/" exact component={Home} />
          <Route path="/login/" component={LoginPanel} />
          <Route path="/users/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
