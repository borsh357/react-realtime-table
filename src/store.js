import { createStore } from 'redux'
import initialState from './initialState'
import editTableReducer from './reducers/editTableReducer'

const store = createStore(editTableReducer, initialState)

export default store
