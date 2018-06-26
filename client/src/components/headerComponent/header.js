import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <div className="header">
          <header>
             <div className="logo">
                <img src="https://s3.us-east-2.amazonaws.com/traffickwise/logosm.png" />
             </div>
             <div className="header-nav">
                 <nav>
                     <ul>
                        <li className="firstul"><Link to="/">Home</Link></li>
                        <li><Link to="Blog">Blog</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                        <li><Link to="Resources">Resources</Link></li>
                        <li><Link to="Facts">The Trafficking Crisis</Link></li>
                        <li className="lastul"><Link to="tipline">Tip</Link></li>
                    </ul>
                </nav>  
             </div>
           </header>
           <div className="hotline">
                <img src="https://s3.us-east-2.amazonaws.com/traffickwise/phone.png" />  National Human Trafficking Hotline 1 (888) 373-7888
           </div>
      </div>
    );
  }
}

export default Header;
