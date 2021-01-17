import initialState from '../initialState'

export default function editTableReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    case 'EDIT_QUANTITY':
      newState = state.map((row) => {
        if (row.id === action.payload.id) {
          row.quantity = Number(action.payload.quantity)
        }
        return row
      })
      return newState
    case 'EDIT_PRICE':
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
