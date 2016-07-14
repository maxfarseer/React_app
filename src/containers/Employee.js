import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Employee extends Component {

	state = {
		employee : this.props.employees.filter( person => person.id == this.props.id )[0]
	}

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static contextTypes = {
		router: PropTypes.object,
		style: PropTypes.object
	}

	componentWillReceiveProps(nextProps){
		const employee = nextProps.employees.filter( person => person.id == nextProps.id )[0]
		if(!employee) this.context.router.push('/employees')
		this.setState({
			employee
		})
	}

	render() {
		if (!this.props.loaded) return null
		const { employee } = this.state
		return(
			<div>
				<p>{ employee == undefined ? 'не работает' : employee.email}</p>
			</div>
		)
	}
}

export default connect(state => {
	const { employees } = state

	return { employees: employees.entities, loaded: employees.loaded }
} )(Employee)