import React, { Component as ReactComponent, PropTypes} from 'react'


export default (Component) => class SingleOpenHOC extends ReactComponent {

	static contextTypes = {
		router: PropTypes.object,
	}

	state = {
		employee : this.props.employees.filter( person => person.id == this.props.id )[0]
	}

	componentWillReceiveProps(nextProps){
		const employee = nextProps.employees.filter( person => person.id == nextProps.id )[0]
		if(!employee) this.context.router.push('/employees')
		this.setState({
			employee
		})
	}

	render() {
		if (!this.props.loaded || !this.state.employee ) return null

		return(
			<Component {...this.props} {...this.state} />
		)
	}
}