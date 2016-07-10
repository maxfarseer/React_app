import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import NewEmployee from '../containers/NewEmployee'

class NewEmployeePage extends Component {

	getFormInput() {
		return <form onSubmit={this.addComment}>
			<label>Form: </label>
			<input type="text" value={this.state.commentText} onChange = {this.handleChange}/>
		</form>
	}

	render() {
		return (
			<div>
				<p>New Employee form</p>
				<NewEmployee />
			</div>
		)
	}
}

export default NewEmployeePage