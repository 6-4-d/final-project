import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Footer extends Component {
  render() {
    return (
        <div className="footer">
         <div className="footer-nav">
         <footer>
         <nav>
            <ul>
                <li><a href="http://www.facebook.com" target ="_blank" class="fa fa-facebook"></a></li>
                <li><a href="http://www.twitter.com" target ="_blank" class="fa fa-twitter"></a></li>
                <li><a href="http://www.github.com" target ="_blank" class="fa fa-github"></a></li>
                <li><a href="http://www.instagram.com" target ="_blank" class="fa fa-instagram"></a></li>
            </ul>
        </nav>  
        </footer>
        </div>
      </div>
    );
  };
}

export default Footer;
