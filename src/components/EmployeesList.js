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

	render() {
		const { employees, loading } = this.props
		if (loading) return <h1>Loading...</h1>
		const items = employees.map((employee) => <li key = {employee.id}>
			<Link to={`/employees/${employee.id}`}>{employee.name}</Link>

		</li>)
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

export default EmployeesList