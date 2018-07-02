import React, { Component } from 'react';



class Contact extends Component {
  render() {
    return (
        <div className="wrapper-contact">
        <div className="container">
            <h5><br></br>
            If you are interested in recieving more content or educational materials please use the form below to contact us!
            </h5>
            <br></br>
            {/* bootstrap form */}
            <form action="contactform.php" method="post">
  <div className="form-group">
    <label className="formGroupExampleInput">Email</label>
    <input type="text" name="mail" className="form-control" id="formGroupExampleInput" placeholder="Email address" required />
  </div>
  <div className="form-group">
    <label className="formGroupExampleInput">Full Name</label>
    <input type="text" name="name" className="form-control" id="formGroupExampleInput" placeholder="Name" required />
  </div>
  <div className="form-group">
    <label className="exampleFormControlTextarea1">Please leave us a comment!</label>
    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="7" required></textarea>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  <label className="form-check-label" className="exampleRadios1">
    Teacher
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label className="form-check-label" className="exampleRadios2">
    Parent
  </label>
</div>
<div className="form-check disabled">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label className="form-check-label" className="exampleRadios3">
    Student
  </label>
</div>
<br></br>
<button type="submit" className="btn btn-dark">Submit</button>
</form>
           </div>
           </div>
    );
  }
}

export default Contact;
