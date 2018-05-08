import React from 'react'
import { Route, Redirect } from 'react-router'

import Home from '../views/main/index'
import Events from '../views/events/events'
import Business from '../views/business/business'
import Backstage from '../views/backstage/backstage'
import AdminRegister from '../views/backstage/admin-register/admin-register'
import AdminLogin from '../views/backstage/admin-login/admin-login'

export default () => [
  <Route path="/" render={() => <Redirect to="/home" />} exact key="first" />,
	<Route path="/home" exact component={Home} key="home" />,
	<Route path="/events" exact component={Events} key="events" />,
	<Route path="/business" exact component={Business} key="business" />,
	<Route path="/backstage" exact component={Backstage} key="backstage" />,
	<Route path="/backstage/admin-register" exact component={AdminRegister} key="adminRegister" />,
	<Route path="/backstage/admin-login" exact component={AdminLogin} key="adminLogin" />,
]
