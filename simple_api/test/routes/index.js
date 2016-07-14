const should = require('should')
const app = require('../../server.js')
const request = require('supertest')

describe('api', () => {


	it('/api/employees => should return list of employees', (done) => {

		request(app)
			.get(`/api/employees`)
			.expect(200) // supertests
			.end((err, res) => { //eslint-disable-line no-unused-vars
				should.not.exist(err) // assert form should.js
				res.body.should.be.an.Array()
				res.body.should.be.have.length(5)
				done()
			})
	})
})
