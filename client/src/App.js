import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import './App.css';
import Home from './components/pages/home';
import Resources from './components/pages/resources';
import Blog from './components/pages/blog';
import Tipline from './components/pages/tipline';
import Contact from './components/pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

         <Route exact path='/' component={Home} />
         <Route exact path='/resources' component={Resources} />
         <Route exact path='/blog' component={Blog} />
         <Route exact path='/tipline' component={Tipline} />
         <Route exact path='/contact' component={Contact} />

         <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
