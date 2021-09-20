import React from 'react';
import { Form, Button } from 'react-bootstrap';

function PostForm() {

    return (
        <Form>
            <Form.Label> <h3> Create a New Post: </h3> </Form.Label>
            <Form.Control size="lg" type="text" placeholder="Put your status here..." />
            <Button variant="outline-dark" className="btn">
                Submit
            </Button>
        </Form>
    )
}

export default PostForm;