import { createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import historyType from '../history'
import reducer from '../reducer'
import api from '../middlewares/api'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { applyMiddleware } from 'redux'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(multi, thunk, api, routerMiddleware(historyType), createLogger()),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}
export default store