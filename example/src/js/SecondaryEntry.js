import React from 'react';
import ReactDOM from 'react-dom';
import Store, { withStore } from '../../../src/ReactObservableStore';
import { updateSync, updateAsync } from './actions';
import Testing from './Testing';
import Loading from './Loading';


console.log('Secondary App here');

class SecondaryEntry extends React.Component {
  constructor (props) {
    super(props)
    console.log('SecondaryApp Constructor');
  }

	componentWillMount() {
		updateSync('Store on will mount')
	}

	render () {
		return this.props.loading ? <Loading /> : <Testing {...this.props} />
	}
}
export default withStore('namespace', SecondaryEntry);
