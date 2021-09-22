import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import { Form, Row, Button } from "react-bootstrap";

function PostForm() {

  // const [postText, setText] = useState('');
  const [formState, setFormState] = useState({
    title: '',
    body: ''
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache, appending new thought to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      // setText(event.target.value);
      setCharacterCount(event.target.value.length);

      const { name, value } = event.target

      setFormState({
        ...formState,
        [name]: value
      });
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      // add thought to database
      await addPost({
        variables: { ...formState }
      });

      // clear form value
      // setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
<<<<<<< HEAD
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <Form id='create-post'
=======
      <Form id='create-port'
>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc
        onSubmit={handleFormSubmit}
        className='form-style post-form-style'
      >
        <div className="card mt-5">
          <h4 className="card-header bg-dark text-white title-fonts">
            Create a New Post
          </h4>
<<<<<<< HEAD
          <div className="card-body bg-secondary">
          <Form.Group
              as={Row}
              className="mb-3 post-form-style mx-auto"
            >
              <Form.Control placeholder="Title of Post"
                className='post-form-style'
                type='title'
                id='title'
                value={formState.title}
                onChange={handleChange}
              />
            </Form.Group>
=======
>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc

          <div className="card-body bg-secondary">
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
              Character Count: {characterCount}/280
              {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <Form.Group
              as={Row}
              className="mb-3 post-form-style mx-auto"
            >
              <Form.Control as='textarea' rows={3} placeholder="Put your post here..."
                className='post-form-style'
                type='body'
                id='body'
                value={formState.body}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="text-center">
              <Button variant="dark" className='submit-btn' type='submit'>Submit</Button>
            </Form.Group>
            {error && <div>Post failed</div>}
          </div>
        </div>
      </Form>
    </div>
  )
}

export default PostForm;