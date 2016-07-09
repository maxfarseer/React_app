import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Navigation from '../containers/Navigation'

class Employees extends Component {


	render() {
		return (
			<div>
				<Link to='/employees/new'>New Employee</Link>
				<Navigation />
				{this.props.children}
			</div>
		)
	}
}

export default Employees