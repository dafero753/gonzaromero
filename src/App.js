import React from 'react';
import { Router, Route } from "react-router"
import createBrowserHistory from "history/createBrowserHistory"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from './components/Home'
import Contacts from './components/Contacts'
import Layout from './components/layout';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router history={history}>
        <Route exact path="/" component={Home}></Route>
      </Router>
      </header>
    </div>
  );
}

export default App;
