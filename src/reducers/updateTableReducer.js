import initialState from '../initialState'

export default function updateTableReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    case 'UPDATE_TABLE':
      newState = action.payload
      return newState
    default:
      return state
  }
}
