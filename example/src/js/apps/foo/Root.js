import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Title from '../../Title';

class Root extends React.Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/title/:param" render={(props) => <Title foo="bar" {...props} />} />
				</Switch>
			</Router>
		)
	}
}

export default Root;
