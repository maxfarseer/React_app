import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Employees extends Component {


	render() {
		return (
			<div>
				<Link to='/employees/new'>New Employee</Link>
				<p> Future navigation</p>
				{this.props.children}
			</div>
		)
	}
}

export default Employees