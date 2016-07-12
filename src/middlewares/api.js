import request from 'superagent'
import { SUCCESS, START, FAIL} from '../constants'

export default store => next => action => {
	const { callApi, type, method, ...rest } = action
	if (!callApi) return next(action)

	next({...rest, type: type + START})

	if(method == 'POST' || method == 'PUT'){
		request(method, callApi)
			.send(rest.data)
			.then(
				response => next({...rest, type: type + SUCCESS, response: response.body}),
				error => next({...rest, type: type + FAIL, error})
			)
	} else {
		request(method, callApi)
			.then(
				response => next({...rest, type: type + SUCCESS, response: response.body}),
				error => next({...rest, type: type + FAIL, error})
			)
	}

}

