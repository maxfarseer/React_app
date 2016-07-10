import {expect} from 'chai'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import { loadAllEmployees, deleteEmployee } from '../../src/AC/employees'
import { LOAD_ALL_EMPLOYEES, START, SUCCESS, FAIL, DELETE_EMPLOYEE } from '../../src/constants'


describe('sync actions', () => {

	it('should create an action to load all employees', () => {
		const expectedAction = {
			type: LOAD_ALL_EMPLOYEES,
			callApi: '/api/employees',
			method: 'GET'
		}
		expect(loadAllEmployees()).to.deep.equal(expectedAction)
	})

})

//describe('async actions', () => {
//	afterEach(() => {
//		nock.cleanAll()
//	})
//
//	it('creates PRODUCT_GET_SUCCESS when get product has been done', () => {
//
//		const data = [
//			{
//				"id": 1,
//				"name": "Rob",
//				"email": "Rob@test.com"
//			},
//			{
//				"id": 2,
//				"name": "Sonam",
//				"email": "Sonam@test.com"
//			}
//		]
//
//		nock(`http://localhost:3001/`)
//			.get('/api/employees')
//			.reply(200, {data})
//
//		const expectedActions = [
//			{type: LOAD_ALL_EMPLOYEES + START},
//			{type: LOAD_ALL_EMPLOYEES + SUCCESS, data},
//		]
//
//		const store = mockStore([])
//
//		return store.dispatch(loadAllEmployees())
//			.then(() => expect(store.getActions()).to.deep.equal(expectedActions))
//	})
//})
