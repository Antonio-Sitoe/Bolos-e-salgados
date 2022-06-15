import React from 'react'
import { Login } from '../../pages/login/styles'

const LoginLayault = ({ children }) => {
  return (
    <Login>
      <div>{children}</div>
    </Login>
  )
}

export default LoginLayault