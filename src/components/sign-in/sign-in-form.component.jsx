import { useState } from 'react'

import { signInUserWithEmailAndPassword, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils.js'
import FormInput from '../form-input/form-input.component.jsx'
import Button from '../button/button.component'
import { setCurrentUser } from '../../store/user/user.reducer.js'
import { useDispatch } from 'react-redux'

import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.js'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch()

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
      dispatch(setCurrentUser(user))
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
    <SignInContainer>
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

        <ButtonsContainer>
          <Button type='submit'>sign in</Button>
          <Button onClick={logGoogleUser} buttonType='google'>sign in with google</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm