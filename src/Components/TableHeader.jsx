import React from 'react'
import './TableHeader.scss'

export default function TableHeader() {
  return (
    <div className="table-header">
      <div className="table-col">Название</div>
      <div className="table-col">Количество</div>
      <div className="table-col">Цена за 1</div>
      <div className="table-col">Цена (total)</div>
    </div>
  )
}
