import React, { Component } from 'react';



class Tipline extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper-tipline">
            <div className="cybertipline-banner">
                <article className="content-wrapper">
                   <div className="centre-body-cover">
                      <div className="header-box-cover">
                          <div className="header-top1">
                              <img className="cybertipline-image" src="http://www.missingkids.org/etc/clientlibs/ncmec/images/cyberTipline-logo.png" alt="missing"/>
                          </div>
                    <div className="header-top2">
                        <h5 className="textColorLightBlue">Report It</h5>
                           <p>If you think you have seen a missing child, or suspect a child may be sexually exploited, contact the National Center for Missing & Exploited Children 24-hours a day, 7 days a week.</p>
                              <h5 className="textColorLightBlue">Report Child sexual exploitation</h5>
                                 <p>Use the CyberTipline to report child sexual exploitation</p>
                                  <a className="textColorLightBlue" href="https://report.cybertip.org" target="_blank" rel="noopener noreferrer" alt="Make a CyberTipline Report">Make a Cyberlink Report>></a>
                              </div>
                            </div>
                          </div>
                      </article>
                    </div>
              </div>   
        </div>                      
    );
  }
}

export default Tipline;
