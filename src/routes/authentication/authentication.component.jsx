import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx'
import SignInForm from '../../components/sign-in/sign-in-form.component.jsx'
import {AuthenticationContainer} from './authentication.styles.js/'

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication