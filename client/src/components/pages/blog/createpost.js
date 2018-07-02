import React, { Component } from 'react';



class CreatePost extends Component {
  render() {
    return (

        <div className="create-post">
        <h2>Create post:</h2>
            <div className="col-md-10">
                <div className="form-area">  
                    <form>
                    <br styles="clear:both" />
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
                    </div>
                    
                    <div className="form-group">
                    <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="300" rows="12"></textarea>
                    </div>
                        
                    <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
                </form>
          </div>
       </div>
    </div>
    );
  }
}

export default CreatePost;