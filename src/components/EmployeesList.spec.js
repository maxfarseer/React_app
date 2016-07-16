import EmployeesList from './EmployeesList'
import { shallow } from 'enzyme'

describe('EmployeesList', () => {
	let props;

	beforeEach(() => {
		props = {
			deleteEmployee:  () => {},
			loadAllEmployees:  () => {},
			employees: [{email: 'Rob@test.com', id:1, name:'Rob'}],
			loading: false
		}
	})


	it('Shoud render one <li> item', () => {

		const element = shallow(<EmployeesList { ...props } />)
		expect(element.find('li')).to.have.length(1)
	})


})
