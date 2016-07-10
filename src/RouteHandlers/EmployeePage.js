import React, { Component, PropTypes } from 'react'
import Employee from '../containers/Employee'

class EmployeePage extends Component {
	render() {
		const { id } = this.props.params
		return (
			<div>
				<Employee id = {id}  />
			</div>
		)
	}
}

export default EmployeePage