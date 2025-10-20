import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import LoginForm from './page/Login'
import PrivateRoute from './components/PrivatGuard'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      <Routes>
      <Route path={'/login'} element={<LoginForm/>} />
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/dashboard'} element={<Dashboard/>}/>
      {/* <Route path={'/'} element={<Home/>}/> */}
      <Route element={<PrivateRoute />} />
    </Routes>
    </ErrorBoundary>
    
  )
}

export default App
