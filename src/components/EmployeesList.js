import React, { Component, PropTypes } from 'react'
//import { Link } from 'react-router'


class EmployeesList extends Component {
	static propTypes = {
		employees: PropTypes.array,
		loading: PropTypes.bool
	};

	deleteEmployee = id => (ev) => {
		ev.preventDefault()
		console.log(id)
		this.props.deleteEmployee(id)
	}

	render() {
		const { employees, loading } = this.props
		if (loading) return <h1>Loading...</h1>
		const list = employees.map(
			(employee) =>
				<li key = {employee.id}>
					<p>{employee.name} </p>
					{/*
					<Link to={`/employees/${employee.id}`}>show</Link>{' '}
					<Link to={`/employees/${employee.id}/edit`}>edit</Link>{' '}
					*/}
					<a href = "#" onClick = {this.deleteEmployee(employee.id)}>delete</a>
				</li>
		)
		return (
			<ul>
				{list}
			</ul>
		)
	}
}

export default EmployeesList