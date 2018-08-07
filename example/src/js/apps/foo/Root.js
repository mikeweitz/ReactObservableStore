import React from 'react';
import { withStore } from '../../../../../src/ReactObservableStore';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Title from '../../Title';

class Root extends React.Component {

	constructor(props) {
		super(props)
		this.state = window.store.default.get('namespace');
		console.log('Root', this.state)
	}

	render () {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={(props) => <Main {...this.state} />} />
					<Route path="/title/:param" render={(props) => <Title foo="bar" {...this.state} />} />
				</Switch>
			</Router>
		)
	}
}

// export default Root;
export default Root;
