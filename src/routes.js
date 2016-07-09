import { Router, Route, Redirect, IndexRedirect } from 'react-router'
import React from 'react'

import IndexPage from './RouteHandlers/IndexPage'
import Employees from './RouteHandlers/Employees'
import EmployeePage from './RouteHandlers/EmployeePage'
import NewEmployeePage from './RouteHandlers/NewEmployeePage'

export const routes = (

	<Route path = "/" component = {IndexPage}>
		<IndexRedirect to = "employees" />
		<Route path = "employees" component = {Employees} >
			<Route path = "new" component = {NewEmployeePage} />
			<Route path = ":id" component = {EmployeePage} />
		</Route>
	</Route>
)