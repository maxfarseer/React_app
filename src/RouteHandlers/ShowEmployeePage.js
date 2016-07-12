import React, { Component, PropTypes } from 'react'
import Employee from '../containers/Employee'

class ShowEmployeePage extends Component {
	render() {
		const { id } = this.props.params
		return (
			<div>
				<Employee id = {id}/>
			</div>
		)
	}
}

export default ShowEmployeePage