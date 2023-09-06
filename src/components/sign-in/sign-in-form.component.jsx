import { useState } from 'react'

import {createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils.js'
import FormInput from '../form-input/form-input.component.jsx'
import Button from '../button/button.component.jsx'
import { userContext } from '../../contexts/user.context.jsx'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)

  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    setFormFields({...formFields, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {user} = await signInUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      if(error.code === 'auth/wrong-password') {
        alert('Wrong combination of email and password')
      }
    }
  }


  const logGoogleUser = async() => {
    await signInWithGooglePopUp()
  }

  return (
    <div className='sign-up-container'>
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label={'email'}
        inputOptions={{
          value: email,
          type: 'text',
          onChange: handleChange,
          name: 'email'
        }}/>

      <FormInput
        label={'password'}
        inputOptions={{
          value: password,
          type: 'password',
          onChange: handleChange,
          name: 'password'
        }}/>

        <div className='buttons-container'>
          <Button type='submit'>sign in</Button>
          <Button onClick={logGoogleUser} buttonType={'google'}>sign in with google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm