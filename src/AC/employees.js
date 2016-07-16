import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL, DELETE_EMPLOYEE, ADD_NEW_EMPLOYEE, EDIT_EMPLOYEE } from '../constants'
import * as api from './api'
import { push } from 'react-router-redux'
const request = require('superagent-bluebird-promise')

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

export function editAndRedirectEmployee(data) {
	return dispatch => {
		dispatch({ type: EDIT_EMPLOYEE + START })
		return request
			.put('http://localhost:8080/api/employees/' + data.id)
			.send(data)
			.then(res => {
				if (!res.ok) {
					dispatch({ type: EDIT_EMPLOYEE + FAIL })
				} else {
					dispatch({
						type: EDIT_EMPLOYEE + SUCCESS,
						response: res.body
					})
					//localStorage.setItem('cks_token', res.body.data)
					dispatch(push("/employees/" + data.id))
				}
			}, err => {
				dispatch({ type: EDIT_EMPLOYEE + FAIL })
			})
	}
}