export default function editPrice(id, price) {
  return {
    type: 'EDIT_PRICE',
    payload: {
      id,
      price,
    },
  }
}
