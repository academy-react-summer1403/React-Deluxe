import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { authRoutes } from '../config/router/auth.router'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    // Routes
    <Rounterprovider routes={isLoggedIn ? authRoutes : publicRoutes} />
    </>
  )
}

export default App
