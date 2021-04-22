import socket from '../js/socketConnect'

const initialState = []

export default function cursorsReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    case 'DRAW_CURSORS':
      console.log(action.payload)
      newState = action.payload.map((cursor) => {
        if (cursor.id !== socket.id) {
          return cursor
        }
        return true
      })
      return newState
    default:
      return state
  }
}
