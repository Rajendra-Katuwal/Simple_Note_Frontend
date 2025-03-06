import React from 'react'

const RegisterPage = () => {
  return (
    <form method="post">
        <h2>Register</h2>
        <input type="text" name="username" id="username" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        {/* <input type="password" name="password" id="password" /> */}
        <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterPage;