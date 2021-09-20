import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../components/stylesheets/signup.css";

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
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

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <main className='flex-row justify-center mb-4'>
        <div className='col-12 col-md-6'>
          <div className='card'>
            <h4 className='card-header'>Sign Up</h4>
            <div className='card-body'>
              <form onSubmit={handleFormSubmit} className="signup-form">
                <div>
                  <label for="firstname-signup">First Name:</label>
                  <input type="text" id="firstname-signup" class="text-color" value={formState.firstname}
                    onChange={handleChange} />
                </div>
                <div>
                  <label for="lastname-signup">Last Name:</label>
                  <input type="text" id="lastname-signup" class="text-color" value={formState.lastname}
                    onChange={handleChange} />
                </div>
                <div>
                  <label for="username-signup">User Name:</label>
                  <input type="text" id="username-signup" class="text-color" value={formState.username}
                    onChange={handleChange} />
                </div>
                <div>
                  <label for="email-signup">Email:</label>
                  <input type="text" id="email-signup" class="text-color" value={formState.email}
                    onChange={handleChange} />
                </div>
                <div>
                  <label for="password-signup">Password:</label>
                  <input type="password" id="password-signup" class="password" value={formState.password}
                    onChange={handleChange} />
                </div>
                <div>
                  <button className='btn w-30' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
              {error && <div>Sign up failed</div>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;