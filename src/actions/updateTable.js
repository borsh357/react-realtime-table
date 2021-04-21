export default function updateTable(rows) {
  return {
    type: 'UPDATE_TABLE',
    payload: rows,
  }
}
