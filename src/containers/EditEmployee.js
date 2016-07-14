import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CheckEmployee from '../HOC/CheckEmployee.js'
import { editAndRedirectEmployee as editAction } from '../AC/employees'
import EmployeeForm from '../components/EmployeeForm'

class EditEmployee extends Component {

	static propTypes = {
		employee: PropTypes.object.isRequired
	}

	render() {
		const { employee } = this.props
		return(
			<EmployeeForm saveForm = {this.props.editAction} employee = {employee} />
		)
	}

}

export default connect(state => {
	const { employees } = state

	return {employees: employees.entities, loaded: employees.loaded}
}, { editAction })(CheckEmployee(EditEmployee))