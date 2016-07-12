import React, { Component, PropTypes } from 'react'


class EmployeeRoot extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default EmployeeRoot