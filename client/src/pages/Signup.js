import React from 'react'
import "../components/stylesheets/signup.css"
function Signup(){
    return(
        <div>
        <h2>Sign Up</h2>
<div class="card black darken-1">
  <div class="card-content border-line">
    <form class="signup-form">
      <div>
        <label for="firstname-signup">First Name:</label>
        <input type="text" id="firstname-signup" class="text-color"/>
      </div>
      <div>
        <label for="lastname-signup">Last Name:</label>
        <input type="text" id="lastname-signup" class="text-color"/>
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
        <input type="password" id="password-signup" class="password"/>
      </div>
      <div>
        <button class="waves-effect red lighten-2 btn" type="submit">Signup</button>
      </div>
    </form>
  </div>
</div>
</div>

    )
}
export default Signup