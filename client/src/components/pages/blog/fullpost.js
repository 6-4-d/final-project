import React, { Component } from 'react';



class FullBlog extends Component {
  render() {
    return (
        <div className="blog-wrapper">
        <div className="container">
        <div className="blog-header">
            <img src="https://s3.us-east-2.amazonaws.com/traffickwise/heretoo.jpg" alt="here too img" />
        </div>
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>The Average Age of Entry Myth</h2>
            <h5>Polaris Blog, January 5, 2016</h5>
            <div className="agemythpic"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/agemyth.jpeg"  alt="age myth" /></div>
            <p>With January's focus on human trafficking awareness, the topic is sure be discussed in the news more often this month—and this exposure is incredibly important to make sure that people are aware of this crime. But statistics on trafficking can be difficult to find, and the information you hear may not be reliable. One such datapoint deals with the sex trafficking of minors.

            Myth in Question
            "The average age of entry for girls into prostitution in the U.S. is 12-14 years old." <a href="https://polarisproject.org/blog/2016/01/05/average-age-entry-myth" target="_blank" rel="noopener noreferrer">Read more...</a></p>
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
            <div className="fakeimg"><a href="https://polarisproject.org/blog/2016/01/05/average-age-entry-myth" alt ="sm pic" target="_blank" rel="noopener noreferrer"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/agemyth.jpeg" alt="age myth" /></a></div><br></br>
            <div className="fakeimg"><a href="https://polarisproject.org/blog/2017/09/12/senate-passes-trafficking-victims-protection-reauthorization-act" alt="sm pic" target ="_blank" rel="noopener noreferrer"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/senateblog.jpeg" alt="senate" /></a></div><br></br>
            <div className="fakeimg"><a href="https://polarisproject.org/blog/2018/06/01/human-trafficking-massage-parlors-deeply-manipulated-sense-choice" alt="sm pic" target="_blank" rel="noopener noreferrer"><img src="https://s3.us-east-2.amazonaws.com/traffickwise/massageblog.jpeg" alt="massage" /></a></div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
                </div>
              </div>
    );
  }
}

export default FullBlog;
