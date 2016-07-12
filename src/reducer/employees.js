import { LOAD_ALL_EMPLOYEES, DELETE_EMPLOYEE, START, SUCCESS, FAIL, ADD_NEW_EMPLOYEE, EDIT_EMPLOYEE } from '../constants'

const defaultState = {
	loading: false,
	loaded: false,
	entities: []
}

export default (employees = defaultState, action) => {
	const { type, data, response } = action

	switch (type) {
		case LOAD_ALL_EMPLOYEES + START: return {...employees, loading: true}
		case LOAD_ALL_EMPLOYEES + SUCCESS: return { entities: response, loaded: true, loading: false }

		case DELETE_EMPLOYEE + SUCCESS: return {
			...employees,
			entities: employees.entities.filter((employee) => employee.id != data.id)
		}

		case ADD_NEW_EMPLOYEE + START: return {...employees, loading: true}
		case ADD_NEW_EMPLOYEE + SUCCESS: return { entities: response, loaded: true, loading: false }

		case EDIT_EMPLOYEE + SUCCESS:
		{
			console.log(response)
			return {entities: response, loaded: true, loading: false}
		}
	}

	return employees
}