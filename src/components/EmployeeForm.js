import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class EmployeeForm extends Component {

	state = {
			name: this.props.employee ? this.props.employee.name : '',
			email: this.props.employee ? this.props.employee.email : '',
			id: this.props.employee ? this.props.employee.id : undefined
	}

	componentWillReceiveProps(nextProps) {
		this.setState ({
			name: nextProps.employee ? nextProps.employee.name : '',
			email: nextProps.employee ? nextProps.employee.email : '',
			id: nextProps.employee ? nextProps.employee.id : undefined,
		})
	}
	static propTypes = {
		employee: PropTypes.object
	};

	render() {
		return <form onSubmit={this.saveEmployee}>
			<div>
				<label htmlFor="name">name:</label>
				<input id='name' type="text" value={this.state.name} onChange={this.handleChange('name')}/>
			</div>
			<div>
				<label htmlFor="email" >email:</label>
				<input id='email' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
			</div>
			<button type="submit" >Save</button>
		</form>
	}

	saveEmployee = (ev) => {
		ev.preventDefault()
		const {name, email, id} = this.state
		this.props.saveForm({name, email, id})
		this.setState({
			name: '',
			email: ''
		})
	}

	handleChange = (type) => (ev) => {
		const obj = {}
		obj[type] = ev.target.value
		this.setState(obj)
	}

}

export default EmployeeForm