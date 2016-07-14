import { combineReducers } from 'redux'
import employeesReducer from './employees'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
	employees: employeesReducer,
	routing: routerReducer,
})
