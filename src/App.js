import React, { useEffect, useRef } from 'react'
import './App.css'
import Table from './Components/Table'
import { useSelector, useDispatch } from 'react-redux'
import socket from './js/socketConnect'
import updateTable from './actions/updateTable'
import Cursor from './Components/Cursor'
import drawCursors from './actions/drawCursors'

function App() {
  const appRef = useRef()
  const rows = useSelector((state) => state.tableReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (rows.length === 0) {
      socket.emit('loadTable')
      socket.on('updateTable', (data) => {
        dispatch(updateTable(data))
      })
    }
    socket.on('drawCursors', (cursors) => {
      dispatch(drawCursors(cursors))
    })
  }, [rows, dispatch])
  const cursors = useSelector((state) => state.cursorsReducer)
  return (
    <div
      className="App"
      ref={appRef}
      onMouseMove={(event) => {
        let rect = appRef.current.getBoundingClientRect()
        var x = event.clientX - rect.left
        var y = event.clientY - rect.top
        socket.emit('changeCursorPosition', x, y)
      }}
    >
      <Table rows={rows} />
      {cursors.map((cursor) => {
        if (cursor)
          var elem = <Cursor key={cursor.id} x={cursor.x} y={cursor.y} />
        return elem
      })}
    </div>
  )
}

export default App
