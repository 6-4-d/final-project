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
            <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Email</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email address" />
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput">Full Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Please leave us a comment!</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  <label class="form-check-label" for="exampleRadios1">
    Teacher
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label class="form-check-label" for="exampleRadios2">
    Parent
  </label>
</div>
<div class="form-check disabled">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label class="form-check-label" for="exampleRadios3">
    Student
  </label>
</div>
<br></br>
<button type="submit" class="btn btn-dark">Submit</button>
</form>
           </div>
           </div>
    );
  }
}

export default Contact;
