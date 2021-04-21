import {
  LOAD_TABLE_ERROR,
  LOAD_TABLE_LOADING,
  LOAD_TABLE_SUCCESS,
} from '../actions/loadTable'

const initialState = { data: [], loading: false, error: '' }

export default function loadTableReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TABLE_LOADING: {
      return { ...state, loading: true, error: '' }
    }
    case LOAD_TABLE_SUCCESS: {
      return { ...state, data: action.data, loading: false }
    }
    case LOAD_TABLE_ERROR: {
      return { ...state, loading: false, error: action.error }
    }
    default: {
      return state
    }
  }
}
