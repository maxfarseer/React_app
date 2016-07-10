import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllEmployees, deleteEmployee } from '../AC/employees'
import EmployeesList from '../components/EmployeesList'

class NewEmployee extends Component {
	state = {
		name: '',
		email: ''
	}

	render() {
		return <form onSubmit={this.addComment}>
			<label>new employee: </label>
			<input type="text" value={this.state.name} onChange={this.handleChange}/>
			<input type="text" value={this.state.email} onChange={this.handleChange}/>
		</form>
	}

	//Todo: last stop
	//handleChange = (ev) => {
	//	this.setState({
	//		//text: ev.target.value
	//
	//	)}
	//}

}

export default connect(state => {
	const { employees } = state

	return { employees: employees.entities, loading: employees.loading }
}, {}

)(NewEmployee)