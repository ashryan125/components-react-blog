import React from 'react';
import "../components/stylesheets/login.css";


function Login() {
  return (
    <div>
      <main className='flex-row justify-center mb-4'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form className="login-form">
              <div>
                <label for="email-login">Email: </label>
                <input type="text" id="email-login" class="text-color" />
              </div>
              <div>
                <label for="password-login">Password: </label>
                <input type="password" id="password-login" class="password" />
              </div>
              <div>
                <button className='btn w-30' type='submit'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main >
    </div >
  );
};

export default Login;