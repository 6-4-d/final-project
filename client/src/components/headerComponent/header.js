import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <nav className="navbar my-nav navbar-expand-lg ">
  <a className="navbar-brand" href="#"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/logosm.png" alt="logo" /></a>
  <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Blog">Blog</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Contact">Contact</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Resources">Resources</Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <Link to="Facts">The Trafficking Crisis</Link>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item"  href="#"><Link to="Facts">The Facts</Link></a>
          <a className="dropdown-item"  href="#"><Link to="Lingo">Trafficking Lingo</Link></a>
          <a className="dropdown-item"  href="#"><Link to="Tactics">Coercive Tactics</Link></a>
          <a className="dropdown-item"  href="#">Red Flags</a>
        </div>
      </li>
    </ul>
  </div> 
  </nav>  
    );
  }
}

export default Header;
