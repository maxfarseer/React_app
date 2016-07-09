import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllEmployees } from '../AC/employees'
import EmployeesList from '../components/EmployeesList'

class NavigationContainer extends Component {
	static propTypes = {

	};

	componentDidMount() {
		this.props.loadAllEmployees()
	}

	render() {
		return <EmployeesList {...this.props}/>
	}
}

export default connect(state => {
	const { employees } = state

	return { employees: employees.entities, loading: employees.loading }
}, {
	loadAllEmployees
})(NavigationContainer)