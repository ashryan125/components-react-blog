import React from 'react';
import { Form, Button } from 'react-bootstrap';

function PostForm() {

    return (
        <Form>
            <Form.Control size="lg" type="text" placeholder="Put your status here..." />
            <Button variant="primary" type="submit" className="btn">
                Submit
            </Button>
        </Form>
    )
}

export default PostForm;