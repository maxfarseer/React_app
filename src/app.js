import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import history from './history'

window.store = store

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('container')
)
