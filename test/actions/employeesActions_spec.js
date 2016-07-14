import {expect} from 'chai'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import historyType from '../../src/history'
import multi from 'redux-multi'


const middlewares = [ multi, thunk, routerMiddleware(historyType)]
const mockStore = configureMockStore(middlewares)

import { loadAllEmployees, deleteEmployee, addNewEmployee, editEmployee, editAndRedirectEmployee } from '../../src/AC/employees'
import { LOAD_ALL_EMPLOYEES, DELETE_EMPLOYEE, ADD_NEW_EMPLOYEE, EDIT_EMPLOYEE, START  } from '../../src/constants'



describe('sync actions', () => {
	const id = 2
	const data = {
		name: 'fakeName',
		email: 'fakeEmail'
	}

	it('should create an action to load all employees', () => {
		const expectedAction = {
			type: LOAD_ALL_EMPLOYEES,
			callApi: '/api/employees',
			method: 'GET'
		}
		expect(loadAllEmployees()).to.deep.equal(expectedAction)
	})

	it('should create an action to delete an employee ', () => {
		const expectedAction = {
			type: DELETE_EMPLOYEE,
			callApi: '/api/employees/' + id,
			method: 'DELETE',
			data: {id}
		}
		expect(deleteEmployee(id)).to.deep.equal(expectedAction)
	})

	it('should create an action to add new employee ', () => {
		const data = {
			name: 'fakeName',
			email: 'fakeEmail'
		}

		const expectedAction = {
			type: ADD_NEW_EMPLOYEE,
			callApi: '/api/employees',
			method: 'POST',
			data
		}
		expect(addNewEmployee(data)).to.deep.equal(expectedAction)
	})

	it('should create an action to edit existed employee ', () => {
		const editData = {...data, id}
		const expectedAction = {
			type: EDIT_EMPLOYEE,
			callApi: '/api/employees/' + id,
			method: 'PUT',
			data: editData
		}
		expect(editEmployee(editData)).to.deep.equal(expectedAction)
	})

})

//describe('async actions', () => {
//	afterEach(() => {
//		nock.cleanAll()
//	})
//
//	it('should dispatch action and do redirection', () => {
//
//		const data =
//			{
//				"id": '3',
//				"name": "Rob",
//				"email": "Rob@test.com"
//			}
//
//
//		const expectedActions = [
//			{type: EDIT_EMPLOYEE + START}
//		]
//
//		const store = mockStore([])
//
//		return store.dispatch(editAndRedirectEmployee(data))
//			.then(() => {
//				expect(store.getActions()).to.deep.equal(expectedActions)
//				expect(store).toContainLocation({pathname: '/employees/' + data.id})
//			})
//	})
//})
