import React, { Component } from 'react';

class Lingo extends Component {
  render() {
    return (
        <div className="container">
             <div className="lingo-cover-pic">
                <img src="https://s3.us-east-2.amazonaws.com/traffickwise/lingo+cover.png" alt="here too" /><br></br><br></br>
              </div> 
          <div className="lingo-content">
            <div className="lingo-pic">
            <img src="https://s3.us-east-2.amazonaws.com/traffickwise/lingo.png" alt="lingo" />
            </div>
            <br></br>
            <br></br>
         </div>
      </div>
    );
  }
}

export default Lingo;
