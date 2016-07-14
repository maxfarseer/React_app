import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CheckEmployee from '../HOC/CheckEmployee.js'

class Employee extends Component {


	static propTypes = {
		employee: PropTypes.object.isRequired
	}

	render() {
		const { employee } = this.props
		return(
			<div>
				<p>{ employee.email }</p>
			</div>
		)
	}
}

export default connect(state => {
	const { employees } = state

	return { employees: employees.entities, loaded: employees.loaded }
} )(CheckEmployee(Employee))

//
//class Employee extends Component {
//
//	state = {
//		employee : this.props.employees.filter( person => person.id == this.props.id )[0]
//	}
//
//	static propTypes = {
//		id: PropTypes.string.isRequired
//	}
//
//	static contextTypes = {
//		router: PropTypes.object
//	}
//
//	componentWillReceiveProps(nextProps){
//		const employee = nextProps.employees.filter( person => person.id == nextProps.id )[0]
//		if(!employee) this.context.router.push('/employees')
//		this.setState({
//			employee
//		})
//	}
//
//	render() {
//		const { employee } = this.state
//		if (!this.props.loaded || !employee ) return null
//		return(
//			<div>
//				<p>{ employee.email }</p>
//			</div>
//		)
//	}
//}
//
//export default connect(state => {
//	const { employees } = state
//
//	return { employees: employees.entities, loaded: employees.loaded }
//} )(Employee)