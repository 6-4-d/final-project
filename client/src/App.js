import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";


import Header from './components/headerComponent/header';
// import Sidebar from './components/Sidebar/sidebar';
import Footer from './components/footerComponent/footer';
import './App.css';
import Home from './components/pages/home';
import Resources from './components/pages/resources';
import Blog from './components/pages/blog/blog';
import FullBlog from './components/pages/blog/fullpost';
import Tipline from './components/pages/tipline';
import Contact from './components/pages/contact';
import Facts from './components/pages/facts';
import SignIn from'./components/pages/blog/signin';
import SignUp from './components/pages/blog/signup';
import CreatePost from './components/pages/blog/createpost';
import Lingo from './components/pages/lingo';
import Tactics from './components/pages/tactics';


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
         <Route exact path='/facts' component={Facts} />
         <Route exact path='/fullpost' component={FullBlog} />
         <Route exact path='/signin' component={SignIn} />
         <Route exact path='/signup' component={SignUp} />
         <Route exact path='/createpost' component={CreatePost} />
         <Route exact path='/lingo' component={Lingo} />
         <Route exact path='/tactics' component={Tactics} />
         

         <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
