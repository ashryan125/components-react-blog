import React from 'react'
import "../components/stylesheets/login.css"
function Login() {
  return (
    <div>
      <form class="login-form">
        <div>
          <label for="email-login">Email:</label>
          <input type="text" id="email-login" class="text-color" />
        </div>
        <div>
          <label for="password-login">Password:</label>
          <input type="password" id="password-login" class="password" />
        </div>
        <div>
          <button class="waves-effect red lighten-2 btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
export default Login