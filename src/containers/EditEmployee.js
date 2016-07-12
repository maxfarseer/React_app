import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { editEmployee as editAction } from '../AC/employees'
import EmployeeForm from '../components/EmployeeForm'

class EditEmployee extends Component {

	render() {
		if (!this.props.loaded) return null
		const employee = this.props.employees.filter( person => person.id == this.props.id )[0]
		if(!employee) this.context.router.push('/employees')

		return(
			<EmployeeForm saveForm = {this.props.editAction} employee = {employee} />
		)
	}

}

export default connect(state => {
	const { employees } = state

	return {employees: employees.entities, loaded: employees.loaded}
}, { editAction })(EditEmployee)