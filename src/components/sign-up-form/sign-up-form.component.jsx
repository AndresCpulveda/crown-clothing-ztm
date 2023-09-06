import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import './sign-up-form.styles.scss'

const SignUpForm = () => {

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if([displayName, email, password, confirmPassword].includes('')) {
      console.log('error, Fill all the blanks');
      return
    }
    if(password !== confirmPassword) {
      console.log('error: Passwords must match');
      return
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('User already exists')
      }
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='sign-up-container'>
      <h1>Don't have an account?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'display name'}
          inputOptions={{value: displayName,
          type: "text",
          required: true,
          onChange: handleChange,
          name: 'displayName'}}/>

        <FormInput
          label={'email'}
          inputOptions={{value: email,
          type: "email",
          required: true,
          onChange: handleChange,
          name: 'email'}}/>

        <FormInput
          label={'password'}
          inputOptions={{value: password,
          type: "password",
          required: true,
          onChange: handleChange,
          name: 'password'}}/>

        <FormInput
          label={'confirm password'}
          inputOptions={{value: confirmPassword,
          type: "password",
          required: true,
          onChange: handleChange,
          name: 'confirmPassword'}}/>

        <Button type="submit">sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm