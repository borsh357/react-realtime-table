import React from 'react'
import './TableRow.scss'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import editQuantity from '../actions/editQuantity'
import editPrice from '../actions/editPrice'
import socket from '../js/socketConnect'

export default function TableRow({ data }) {
  const dispatch = useDispatch()
  return (
    <div className="table-row">
      <div className="table-col">{data.name}</div>
      <div
        className="table-col"
        onDoubleClick={() => {
          dispatch(editQuantity(data.id, prompt('enter new quantity')))
          socket.emit('loadTable')
        }}
      >
        {data.quantity}
      </div>
      <div
        className="table-col"
        onDoubleClick={() => {
          dispatch(editPrice(data.id, prompt('enter new price')))
          socket.emit('loadTable')
        }}
      >
        {data.priceForOne}
      </div>
      <div className="table-col">{data.quantity * data.priceForOne}</div>
    </div>
  )
}

TableRow.propTypes = {
  data: PropTypes.object,
}
