import request from 'superagent'

export function loadAllEmployees() {
	return request.get(`/api/employees`)
}
