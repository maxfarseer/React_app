import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL } from '../constants'

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
	}

	return employees
}