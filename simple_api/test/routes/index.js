const should = require('should')
const app = require('../../server.js')
//const mock = require('../mock.js')
//const initialMock = {...mock}
const request = require('supertest')

const testingEmployee = {
	id: 2,
	data: { id: '2', name: "Sonam", email: "Sonam@test.com" },
	newData: { id: '2', name: "Vivian", email: "Vivian@test.com" }
}

describe('api', () => {
	//let testMock;
	//
//	beforeEach( () => {
//		testMock = iintialMock
//
//	)

	it('GET /api/employees => should return list of employees', (done) => {

		request(app)
			.get(`/api/employees`)
			.expect(200) // supertests
			.end((err, res) => { //eslint-disable-line no-unused-vars
				should.not.exist(err) // assert from should.js
				res.body.should.be.an.Array().and.has.length(5)
				done()
			})
	})


	describe('PUT /employees/:id', () => {
		it('should return obj of added employee', (done) => {

			request(app)
				.put(`/api/employees/`+ testingEmployee.id)
				.send(testingEmployee.newData)
				.expect(200) // supertests
				.end((err, res) => { //eslint-disable-line no-unused-vars
					should.not.exist(err) // assert from should.js
					res.body.should.be.an.Array().and.has.length(5)
					res.body.filter(
						employee => employee.id == testingEmployee.id)
						[0].should.be.eql(testingEmployee.newData)
					should.not.exist(
						res.body.filter( employee => employee.name == testingEmployee.data.name)[0]
					)
					done()
				})
		})
	})

	describe('DELETE /employees/:id', () => {

		it('should return obj of deleted employee', (done) => {

			request(app)
				.delete(`/api/employees/` + testingEmployee.id)
				.expect(200) // supertests
				.end((err, res) => { //eslint-disable-line no-unused-vars
					should.not.exist(err) // assert from should.js
					res.body.should.be.containEql(testingEmployee.newData)
					done()
				})
		})

	})

	describe('POST /employees/:id', () => {
		it('should return obj of added employee', (done) => {

			request(app)
				.post(`/api/employees`)
				.send(testingEmployee.data)
				.expect(200) // supertests
				.end((err, res) => { //eslint-disable-line no-unused-vars
					should.not.exist(err) // assert from should.js
					res.body.should.be.an.Object()
					done()
				})
		})
	})
})
