import { useState } from 'react'
import Dashboard from './components/Dashboard.jsx'
import LoginScreen from './components/LoginScreen.jsx'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
    <Dashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  )
}

export default App
