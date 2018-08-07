import React from 'react';
import Store, { withStore } from '../../../src/ReactObservableStore';
import { updateSync, updateAsync } from '../../actions';
import SubComponent from './SubComponent';
import Loading from '../../Loading';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
	componentWillMount() {
		updateSync('Store on will mount')
	}
	render () {
		return this.props.loading ? <Loading /> : <SubComponent {...this.props} />
	}
}
export default withRouter(withStore('namespace', Main));
