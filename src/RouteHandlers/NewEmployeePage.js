import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import NewEmployee from '../containers/NewEmployee'

class NewEmployeePage extends Component {


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