import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addNewEmployee } from '../AC/employees'
import EmployeeForm from '../components/EmployeeForm'

class NewEmployee extends Component {
	state = {
		name: '',
		email: ''
	}

	render() {
		return(
			<EmployeeForm saveForm = {this.props.addNewEmployee} />
		)
	}

}

export default connect(null, { addNewEmployee })(NewEmployee)