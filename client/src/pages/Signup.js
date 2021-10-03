import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Form, Row, Button } from "react-bootstrap";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("button clicked!");
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="backgroundColor mb-5">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card mt-5 border-0">
            <h4 className="card-header bg-dark text-white title-fonts">
              SIGNUP
            </h4>
            <div className="card-body bg-secondary">
              <Form
                onSubmit={handleFormSubmit}
                className="form-style"
                id="signup-form"
              >
                <Form.Group as={Row} className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className="form-style"
                    placeholder="Your username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="form-style"
                    placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    className="form-style"
                    placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="text-center">
                  <Button variant="dark" className="submit-btn" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>

              {error && <div>Signup failed</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
