import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import historyType from './history'
import { AppContainer } from 'react-hot-loader'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(historyType, store)

window.store = store

render(
	<Provider store={store}>
		<AppContainer>
			<Router history={history} routes={routes} />
		</AppContainer>
	</Provider>,
	document.getElementById('container')
)
