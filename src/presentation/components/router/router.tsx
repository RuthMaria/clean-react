import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/presentation/test'
import { AuthenticationSpy } from '@/presentation/pages/login/login.spec'

const Router: React.FC = () => {
  const validationSpy = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login validation={validationSpy} authentication={authenticationSpy}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
