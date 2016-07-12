import React, { Component, PropTypes } from 'react'
import EditEmployee from '../containers/EditEmployee'

class EditEmployeePage extends Component {
	render() {
		const { id } = this.props.params
		return (
			<div>
				<EditEmployee id = {id}/>
			</div>
		)
	}
}

export default EditEmployeePage