import React from 'react'
import './Table.scss'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TotalPriceRow from './TotalPriceRow'
import PropTypes from 'prop-types'

export default function Table({ rows }) {
  return (
    <div className="table">
      <TableHeader />
      {rows.map((row) => (
        <TableRow key={row.id} data={row} />
      ))}
      <TotalPriceRow />
    </div>
  )
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
}
