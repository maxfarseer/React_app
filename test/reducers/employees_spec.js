import {expect} from 'chai'
import reducer from '../../src/reducer/employees'
import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL, DELETE_EMPLOYEE } from '../../src/constants'

describe('employee reducer', () => {

	const initialState = {
		loading: false,
		loaded: false,
		entities: []
	}

	it('set loading to true then employees loading is started', () => {

		const action = {
			type: LOAD_ALL_EMPLOYEES + START
		}

		const nextState = reducer(initialState, action)

		expect(nextState).to.deep.equal({
			loading: true,
			loaded: false,
			entities: []
		})
	})

	it('set loading to true then employees loading is finish', () => {

		const initialState = {
			loading: true,
			loaded: false,
			entities: []
		}

		const action = {
			type: LOAD_ALL_EMPLOYEES + SUCCESS,
			response: [{id:2, name: 'fakeName', email: 'fakeEmail'}]
		}

		const nextState = reducer(initialState, action)

		expect(nextState).to.deep.equal({
			loading: false,
			loaded: true,
			entities: [{id:2, name: 'fakeName', email: 'fakeEmail'}]
		})
	})


})
