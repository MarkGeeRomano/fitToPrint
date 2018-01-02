import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = ({ handleSubmit }) => {
  console.log(`handleSubmit:`,handleSubmit)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username</label>
        <Field name="userName" component="input" type="text" value="test1" default="test2"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm