import React from 'react'
import ProfilePage from './components/ProfilePage'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <ProfilePage />
      </div>
    </ThemeProvider>
  )
}

export default App