import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL, DELETE_EMPLOYEE, ADD_NEW_EMPLOYEE, EDIT_EMPLOYEE } from '../constants'
import * as api from './api'

export function loadAllEmployees() {
	return {
		type: LOAD_ALL_EMPLOYEES,
		callApi: '/api/employees',
		method: 'GET'
	}
}

export function deleteEmployee(id) {
	return  {
		type: DELETE_EMPLOYEE,
		callApi: '/api/employees/' + id,
		method: 'DELETE',
		data: { id }
	}
}

export function addNewEmployee(data) {
	return {
		type: ADD_NEW_EMPLOYEE,
		callApi: '/api/employees',
		method: 'POST',
		data
	}
}

export function editEmployee(data) {
	return {
		type: EDIT_EMPLOYEE,
		callApi: '/api/employees/'+ data.id,
		method: 'PUT',
		data
	}
}