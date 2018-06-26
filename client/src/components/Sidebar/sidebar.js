import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="tip-sidebar">
          <div class="cybertipline-banner">
                <article class="content-wrapper">
                   <div class="centre-body-cover">
                      <div class="header-box-cover">
                          <div class="header-top1">
                              <img class="cybertipline-image" src="http://www.missingkids.org/etc/clientlibs/ncmec/images/cyberTipline-logo.png" alt="missing image"/>
                          </div>
                    <div class="header-top2">
                        <h5 class="textColorLightBlue">Report It</h5>
                           <p>If you think you have seen a missing child, or suspect a child may be sexually exploited, contact the National Center for Missing & Exploited Children 24-hours a day, 7 days a week.</p>
                              <h5 class="textColorLightBlue">Report Child sexual exploitation</h5>
                                 <p>Use the CyberTipline to report child sexual exploitation</p>
                                  <a class="textColorLightBlue" href="https://report.cybertip.org" target="_blank" alt="Make a CyberTipline Report">Make a Cyberlink Report>></a>
                              </div>
                            </div>
                          </div>
                      </article>
                    </div>
      </div>
    );
  };
}

export default Sidebar;
