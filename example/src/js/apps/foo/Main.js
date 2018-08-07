import React from 'react';
import { withStore } from '../../../../../src/ReactObservableStore';
import { updateSync, updateAsync } from '../../actions';
import SubComponent from './SubComponent';
import Loading from '../../Loading';
import { withRouter } from 'react-router-dom';

// Global storage
const Store = window.store.default

class Main extends React.Component {
	constructor(props) {
		console.log('Main constructor', props)
		super(props)
		console.log('Main component', this.props)
	}

	componentWillMount() {
		console.log('Main will mount')
		updateSync('Store on will mount')
	}

	render () {
		console.log('Main component Render', this.props.loading)
		return this.props.loading ? <Loading /> : <SubComponent {...this.props} />
	}
}
export default withRouter(Store.withStore('namespace', Main));
