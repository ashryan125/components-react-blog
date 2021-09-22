import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

function CommentForm() {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addComment({
                variables: { commentBody, postId }
            });

            // clear form value
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div>
            <Form id='create-comment'
                onSubmit={handleFormSubmit}
                className='form-style comment-form-style'
            >
                <div className="card mt-5">
                    <h5 className="card-header bg-dark text-white title-fonts">
                        Leave a Comment
                    </h5>
                    <div className="card-body bg-secondary">
                        <Form.Group
                            as={Row}
                            className="mb-3 post-form-style mx-auto"
                        >
                        </Form.Group>

                        <div className="card-body bg-secondary">
                            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                                Character Count: {characterCount}/280
                                {error && <span className="ml-2">Something went wrong...</span>}
                            </p>
                            <Form.Group
                                as={Row}
                                className="mb-3 post-form-style mx-auto"
                            >
                                <Form.Control as='textarea' rows={3}
                                    name='comment'
                                    type='comment'
                                    id='comment'
                                    placeholder="Leave a comment to this post..."
                                    value={commentBody}
                                    className="comment-form-style"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button variant="dark" className='submit-btn' type='submit'>Submit</Button>
                            </Form.Group>
                            {error && <div>Comment failed</div>}
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default CommentForm;