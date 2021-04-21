import initialState from '../initialState'

export default function editTableReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    case 'UPDATE_TABLE':
      newState = action.payload
      return newState
    case 'EDIT_QUANTITY':
      if (!Number(action.payload.quantity)) {
        alert('Enter valid number!')
        return state
      }
      newState = state.map((row) => {
        if (row.id === action.payload.id) {
          row.quantity = Number(action.payload.quantity)
        }
        return row
      })
      return newState
    case 'EDIT_PRICE':
      if (!Number(action.payload.price)) {
        alert('Enter valid number!')
        return state
      }
      newState = state.map((row) => {
        if (row.id === action.payload.id) {
          row.priceForOne = Number(action.payload.price)
        }
        return row
      })
      return newState
    default:
      return state
  }
}
