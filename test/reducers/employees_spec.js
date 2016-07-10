import {expect} from 'chai'
import reducer from '../../src/reducer/employees'
import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL, DELETE_EMPLOYEE } from '../../src/constants'

describe('employee reducer', () => {

	it('set loading to false then employees is loaded', () => {

		const initalState = {
			loading: false,
			loaded: false,
			entities: []
		}

		const action = {
			type: LOAD_ALL_EMPLOYEES + START
		}

		const nextState = reducer(initalState, action)

		expect(nextState).to.deep.equal({
			loading: true,
			loaded: false,
			entities: []
		})
	})

})
