import React from 'react'
import './App.css'
import Table from './Components/Table'
import { useSelector } from 'react-redux'

function App() {
  const rows = useSelector((state) => state)
  return (
    <div className="App">
      <Table rows={rows} />
    </div>
  )
}

export default App
