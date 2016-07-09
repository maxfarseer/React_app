import React, { Component, PropTypes } from 'react'
import DevTools from '../containers/DevTools'

class IndexPage extends Component {
	static propTypes = {

	};

	render() {
		return (
			<div>
				<h1>Employee List!</h1>
				{this.props.children}
				<DevTools />
			</div>
		)
	}
}

export default IndexPage