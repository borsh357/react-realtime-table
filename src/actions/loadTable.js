// UNUSED
// import Api from '../api'

// export const LOAD_TABLE_LOADING = 'REDUX_THUNK_LOAD_TABLE_LOADING'
// export const LOAD_TABLE_SUCCESS = 'REDUX_THUNK_LOAD_TABLE_SUCCESS'
// export const LOAD_TABLE_ERROR = 'REDUX_THUNK_LOAD_TABLE_ERROR'

// export const loadTable = () => (dispatch) => {
//   dispatch({ type: LOAD_TABLE_LOADING })
//   Api.getTable()
//     .then((response) => response.json())
//     .then(
//       (data) => dispatch({ type: LOAD_TABLE_SUCCESS, data }),
//       (error) =>
//         dispatch({
//           type: LOAD_TABLE_ERROR,
//           error: error.message || 'Unexpected Error!!!',
//         })
//     )
// }
