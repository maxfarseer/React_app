import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL, DELETE_EMPLOYEE } from '../constants'
import * as api from './api'


//export function oldloadAllEmployees() {
//	return (dispatch, store) => {
//		dispatch({
//			type: DELETE_EMPLOYEE + START
//		})
//
//		api.loadAllEmployees()
//			.then((response) => {
//				dispatch({
//					type: LOAD_ALL_EMPLOYEES + SUCCESS,
//					response: response.body
//				})
//			}, (error) => {
//				dispatch({
//					type: LOAD_ALL_EMPLOYEES + FAIL,
//					error
//				})
//			})
//	}
//}

export function loadAllEmployees() {
	return {
		type: LOAD_ALL_EMPLOYEES,
		callApi: '/api/employees',
		method: 'GET'
	}
}

export function deleteEmployee(id) {
	return (dispatch, store) => {
		dispatch({
			type: DELETE_EMPLOYEE,
			callApi: '/api/employees/' + id,
			method: 'DELETE',
			data: { id }
		})
	}
}