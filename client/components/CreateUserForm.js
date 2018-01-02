import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreateUserForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username</label>
        <Field name="userName" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="zip">Zip</label>
        <Field name="zip" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

CreateUserForm = reduxForm({
  // a unique name for the form
  form: 'createUser'
})(CreateUserForm)

export default CreateUserForm