import React, { useEffect } from 'react'
import './App.css'
import Table from './Components/Table'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'

function App() {
  useEffect(() => {
    const socket = io('http://localhost:4000')
    socket.emit('change', { data: 'change emitted' })
  })
  const rows = useSelector((state) => state)
  return (
    <div className="App">
      <Table rows={rows} />
    </div>
  )
}

export default App
