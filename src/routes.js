import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import React from 'react'

import IndexPage from './RouteHandlers/IndexPage'
import Employees from './RouteHandlers/Employees'
import EmployeePage from './RouteHandlers/EmployeePage'
import NewEmployeePage from './RouteHandlers/NewEmployeePage'
import EmployeeIndex from './RouteHandlers/EmployeeIndex'
import NotFound from './RouteHandlers/NotFound'

export const routes = (

	<Route path = "/" component = {IndexPage}>
		<IndexRedirect to = "employees" />
		<Route path = "employees" component = {Employees} >
			<IndexRoute component = {EmployeeIndex} />
			<Route path = "new" component = {NewEmployeePage} />
			<Route path = ":id" component = {EmployeePage} />
		</Route>
		<Route path = "*" component = {NotFound} />
	</Route>
)