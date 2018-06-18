import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
        <img src="./client/src/images/TW1.png" />
           Logo
        </div>

        <nav>
            <ul>
                <li className="firstul"><Link to="/">Home</Link></li>
                <li><Link to="Blog">Blog</Link></li>
                <li><Link to="Contact">Contact</Link></li>
                <li><Link to="Resources">Resources</Link></li>
                <li className="lastul"><Link to="tipline">Tip</Link></li>
            </ul>
        </nav>    
      </header>
    );
  }
}

export default Header;
