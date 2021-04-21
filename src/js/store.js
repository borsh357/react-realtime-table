import { createStore } from 'redux'
import initialState from './initialState'
import tableReducer from '../reducers/tableReducer'

const store = createStore(tableReducer, initialState)

export default store
