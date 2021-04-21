import React, { useEffect } from 'react'
import './App.css'
import Table from './Components/Table'
import { useSelector, useDispatch } from 'react-redux'
import socket from './js/socketConnect'
import updateTable from './actions/updateTable'

function App() {
  const rows = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    if (rows.length === 0) {
      socket.emit('loadTable')
      socket.on('updateTable', (data) => {
        dispatch(updateTable(data))
      })
    }
  }, [rows, dispatch])
  return (
    <div className="App">
      <Table rows={rows} />
    </div>
  )
}

export default App
