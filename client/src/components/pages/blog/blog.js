import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Blog extends Component {
  render() {
    return (
        <div className="blog-wrapper">
          <div className="container">
          <div className="blog-header">
              <img src="https://s3.us-east-2.amazonaws.com/traffickwise/wilber.jpg" alt="wilber"/>
          </div>
        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <h2>The Average Age of Entry Myth</h2>
              <h5>Polaris Blog, January 5, 2016</h5>
              <div className="agemythpic"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/agemyth.jpeg" alt="age myth"/></div>
              <p>With January's focus on human trafficking awareness, the topic is sure be discussed in the news more often this month—and this exposure is incredibly important to make sure that people are aware of this crime. But statistics on trafficking can be difficult to find, and the information you hear may not be reliable. One such datapoint deals with the sex trafficking of minors.

              Myth in Question
              "The average age of entry for girls into prostitution in the U.S. is 12-14 years old." <a href="https://polarisproject.org/blog/2016/01/05/average-age-entry-myth" target="_blank" rel="noopener noreferrer">Read more...</a></p>
            </div>
            <div className="card">
              <h2>Human trafficking in massage parlors: a deeply manipulated sense of “choice”</h2>
              <h5>Polaris blog, June 1, 2018</h5>
              <div className="massagepic" ><img src="https://s3.us-east-2.amazonaws.com/traffickwise/massageblog.jpeg" alt="massage pic" /></div>
              <p>When was the last time you heard someone joke about a “happy ending” to a massage? Or walked past a massage business that seemed unusually unwelcoming — with covered windows, a locked door with a buzzer on it, maybe an “entrance around back” sign?

              Massage parlor trafficking is happening in plain sight, in businesses that operate as if they are legal massage or bodywork establishments. It persists because we choose to ignore it — as something harmless, as something inevitable, or both: at best, a victimless crime. At worst, a public nuisance. <a href="https://polarisproject.org/blog/2018/06/01/human-trafficking-massage-parlors-deeply-manipulated-sense-choice" target="_blank" rel="noopener noreferrer">Read more...</a></p>
            </div>
            <div className="card">
              <h2>Senate Passes Trafficking Victims Protection Reauthorization Act</h2>
              <h5>Polaris blog, September 12, 2017</h5>
              <div className="senatepic" ><img src="https://s3.us-east-2.amazonaws.com/traffickwise/senateblog.jpeg" alt="senate blog"/></div>
              <p>Polaris applauds the passage of the Trafficking Victims Protection Reauthorization Act of 2017 (TVPRA) and the Abolish Human Trafficking Act.

              Since 2000, the laws enacted under the TVPRA have served as the main tool to combat modern slavery and human trafficking. Last night, these bills passed the U.S. Senate under unanimous consent, reauthorizing the critical funding for domestic programs of the TVPRA, which are set to expire at the end of September. <a href="https://polarisproject.org/blog/2017/09/12/senate-passes-trafficking-victims-protection-reauthorization-act" target ="_blank" rel="noopener noreferrer">Read more...</a></p>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg">Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg"><a href="https://polarisproject.org/blog/2016/01/05/average-age-entry-myth" alt="sm myth pic" target="_blank" rel="noopener noreferrer"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/agemyth.jpeg" alt="age myth"/></a></div><br></br>
              <div className="fakeimg"><a href="https://polarisproject.org/blog/2017/09/12/senate-passes-trafficking-victims-protection-reauthorization-act" alt="sm senate pic" target ="_blank" rel="noopener noreferrer"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/senateblog.jpeg" alt="senate" /></a></div><br></br>
              <div className="fakeimg"><a href="https://polarisproject.org/blog/2018/06/01/human-trafficking-massage-parlors-deeply-manipulated-sense-choice" alt="sm massage pic" target="_blank" rel="noopener noreferrer"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/massageblog.jpeg" alt="massage" /></a></div>
            </div>
            <div className="card">
              <h4>Want to create a post?</h4>
              <h6><Link to="SignIn">Sign In</Link></h6>
            </div>
          </div>
         </div>
        </div>
      </div>
    );
  }
}

export default Blog;
