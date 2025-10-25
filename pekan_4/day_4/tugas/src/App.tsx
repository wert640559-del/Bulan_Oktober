import React from 'react'
import Task1 from './components/nomor1'
import Task2 from './components/nomor2'
import Task3 from './components/nomor3'
import Task4 from './components/nomor4'

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Evaluasi Harian: Advanced Hooks dan Patterns</h1>
      <div className="space-y-8">
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
      </div>
    </div>
  )
}

export default App