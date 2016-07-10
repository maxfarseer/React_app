import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Employee extends Component {
	state = {
		email: null
	}
	static propTypes = {
		id: PropTypes.string.isRequired
	};

	render() {
		if (!this.props.loaded) return null
		const employee = this.props.employees.filter( person => person.id == this.props.id )[0]
		return(
			<div>
				<p>{employee.email}</p>
			</div>
		)
	}
}

export default connect(state => {
	const { employees } = state

	return { employees: employees.entities, loaded: employees.loaded }
} )(Employee)