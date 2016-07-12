import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import React from 'react'

import IndexPage from './RouteHandlers/IndexPage'
import Employees from './RouteHandlers/Employees'
import EmployeeRoot from './RouteHandlers/EmployeeRoot'
import NewEmployeePage from './RouteHandlers/NewEmployeePage'
import ShowEmployeePage from './RouteHandlers/ShowEmployeePage'
import EditEmployeePage from './RouteHandlers/EditEmployeePage'
import EmployeesIndex from './RouteHandlers/EmployeesIndex'
import NotFound from './RouteHandlers/NotFound'

export const routes = (

	<Route path = "/" component = {IndexPage}>
		<IndexRedirect to = "employees" />
		<Route path = "employees" component = {Employees} >
			<IndexRoute component = {EmployeesIndex} />
			<Route path = "new" component = {NewEmployeePage} />
			<Route path = ":id" component = {EmployeeRoot} >
				<IndexRoute component = {ShowEmployeePage} />
				<Route path = "edit" component = {EditEmployeePage} />
			</Route>
		</Route>
		<Route path = "*" component = {NotFound} />
	</Route>
)