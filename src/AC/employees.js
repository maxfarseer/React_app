import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL } from '../constants'
import * as api from './api'

export function loadAllEmployees() {
	return (dispatch, store) => {
		dispatch({
			type: LOAD_ALL_EMPLOYEES + START
		})

		api.loadAllEmployees()
			.then((response) => {
				dispatch({
					type: LOAD_ALL_EMPLOYEES + SUCCESS,
					response: response.body
				})
			}, (error) => {
				dispatch({
					type: LOAD_ALL_EMPLOYEES + FAIL,
					error
				})
			})
	}
}