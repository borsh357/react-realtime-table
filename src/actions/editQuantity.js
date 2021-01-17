export default function editQuantity(id, quantity) {
  return {
    type: 'EDIT_QUANTITY',
    payload: {
      id,
      quantity,
    },
  }
}
