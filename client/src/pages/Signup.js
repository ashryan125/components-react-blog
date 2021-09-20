import React from 'react';
import "../components/stylesheets/signup.css";

function Signup() {
  return (
    <div>
      <main className='flex-row justify-center mb-4'>
        <div className='col-12 col-md-6'>
          <div className='card'>
            <h4 className='card-header'>Sign Up</h4>
            <div className='card-body'>
              <form className="signup-form">
                <div>
                  <label for="firstname-signup">First Name:</label>
                  <input type="text" id="firstname-signup" class="text-color" />
                </div>
                <div>
                  <label for="lastname-signup">Last Name:</label>
                  <input type="text" id="lastname-signup" class="text-color" />
                </div>
                <div>
                  <label for="username-signup">User Name:</label>
                  <input type="text" id="username-signup" class="text-color" />
                </div>
                <div>
                  <label for="email-signup">Email:</label>
                  <input type="text" id="email-signup" class="text-color" />
                </div>
                <div>
                  <label for="password-signup">Password:</label>
                  <input type="password" id="password-signup" class="password" />
                </div>
                <div>
                  <button className='btn w-30' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;