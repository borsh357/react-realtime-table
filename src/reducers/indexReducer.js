import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import cursorsReducer from './cursorsReducer'

const indexReducer = combineReducers({ tableReducer, cursorsReducer })

export default indexReducer
