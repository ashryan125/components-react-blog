import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Form, Row, Button } from "react-bootstrap";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('login button clicked!');
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="backgroundColor mb-5">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card mt-5 border-0">
            <h4 className="card-header bg-dark text-white title-fonts">
              LOGIN
            </h4>
            <div className="card-body bg-secondary">
              <Form onSubmit={handleFormSubmit} className="form-style" id='login-form'>
                <Form.Group
                  as={Row}
                  className="mb-3"
                >
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    className="form-style"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    id="email"
                    value={formState.email}
                  />
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                >
                  <Form.Label>Password</Form.Label>

                  <Form.Control 
                  className="form-style"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="text-center">
                  <Button variant="dark" className='submit-btn' type='submit'>Submit</Button>
                </Form.Group>
              </Form>

              {error && <div>Login failed</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
