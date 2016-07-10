import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class EmployeesList extends Component {
	static propTypes = {
		employees: PropTypes.array,
		loading: PropTypes.bool
	};

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.employees != this.props.employees
	}

	deleteEmploee = id => (ev) => {
		ev.preventDefault()
		this.props.deleteEmployee(id)
	}

	render() {
		const { employees, loading } = this.props
		if (loading) return <h1>Loading...</h1>
		const items = employees.map(
			(employee) =>
				<li key = {employee.id}>
					<p>{employee.name} </p>
					<Link to={`/employees/${employee.id}`}>open</Link>{' '}
					<a href = "#" onClick = {this.deleteEmploee(employee.id)}>delete</a>
				</li>
		)
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

export default EmployeesList