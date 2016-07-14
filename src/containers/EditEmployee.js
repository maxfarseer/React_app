import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { editEmployee as editAction } from '../AC/employees'
import EmployeeForm from '../components/EmployeeForm'

class EditEmployee extends Component {

	static contextTypes = {
		router: PropTypes.object,
	}

	state = {
		employee : this.props.employees.filter( person => person.id == this.props.id )[0]
	}

	componentWillReceiveProps(nextProps){
		const employee = nextProps.employees.filter( person => person.id == nextProps.id )[0]
		if(!employee) this.context.router.push('/employees')
		this.setState({
			employee
		})
	}

	render() {
		const { employee } = this.state
		if (!this.props.loaded || !employee ) return null
		return(
			<EmployeeForm saveForm = {this.props.editAction} employee = {employee} />
		)
	}

}

export default connect(state => {
	const { employees } = state

	return {employees: employees.entities, loaded: employees.loaded}
}, { editAction })(EditEmployee)