import React from 'react';
import { Form, Row, Button } from "react-bootstrap";

function PostForm() {

    return (
        <Form id='create-port' 
          //   onSubmit={handleFormSubmit}
          className='form-style post-form-style'
        >
            <div className="card mt-5">
            <h4 className="card-header bg-dark text-white title-fonts">
              Create a New Post
            </h4>
            <div className="card-body bg-secondary">
            
                <Form.Group
                  as={Row}
                  className="mb-3 post-form-style mx-auto"
                  controlId="formPlaintextPassword"
                >
                  <Form.Control as='textarea' rows={3} placeholder="Put your status here..." 
                //   onChange={handleChange}
                className='post-form-style'
                  />
                </Form.Group>

                <Form.Group className="text-center">
                <Button variant="dark" className='submit-btn'>Submit</Button>
                </Form.Group>
          

              {/* {error && <div>Login failed</div>} */}
            </div>
          </div>
        </Form>
    )
}

export default PostForm;