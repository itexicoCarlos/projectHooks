import React, {useState, useRef} from 'react'
// Login import
import { login } from '../../helpers/Auth'

const Login = () => {
  // ! state 
  const [loginMessage, setLoginMessage] = useState(null)
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  // * Methods
  const handleOnSubmit = (e) => {
    e.preventDefault()
    login(refEmail.current.value, refPassword.current.value)
      .catch(error => setLoginMessage('Usuario o Password incorrectos'))
  }

  return(
    <div>
      <h1>Seccion Login</h1>
      <form  onSubmit={handleOnSubmit}>
        <input type="email" placeholder='Email' ref={refEmail}/> 
        <input type="password" placeholder='Password' ref={ refPassword}/> 
        {
          loginMessage && 
          <div className='error'>
            Error: {loginMessage}
          </div>
        }
        <input type="submit" value='Login'/> 
      </form>
    </div>
  )
}

export default Login