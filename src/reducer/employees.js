import { LOAD_ALL_EMPLOYEES, DELETE_EMPLOYEE, START, SUCCESS, FAIL } from '../constants'

const defaultState = {
	loading: false,
	loaded: false,
	entities: []
}

export default (employees = defaultState, action) => {
	const { type, data, response } = action

	switch (type) {
		case LOAD_ALL_EMPLOYEES + START: return {...employees, loading: true}
		case LOAD_ALL_EMPLOYEES + SUCCESS: return { entities: response, loaded: true }

		case DELETE_EMPLOYEE + SUCCESS: return {
			...employees,
			entities: employees.entities.filter((employee) => employee.id != data.id)
		}
	}

	return employees
}