import React from 'react';
import { updateSync, updateAsync } from './actions';
import Store from '../../../src/ReactObservableStore';
import { Link } from 'react-router-dom';

class Testing extends React.Component {
	clickLink(e, link) {
		e.preventDefault();
		updateAsync('link clicked');
		this.props.history.push(link);
	}
 	render () {
		return (
			<div>
				<h2>Testing Component</h2>
				<p>
					Read store props with <em>this.props.title.nested</em>: {this.props.title.nested}
				</p>
				<p>
					Read from anywhere with <em>Store.get('namespace.title.nested')</em>: {Store.get('namespace.title.nested')}
				</p>
				<p>
					Simple link example: <a role="button" href="" onClick={(e) => this.clickLink(e, '/title/id')}>click</a>
					{' '}using <em>{`Store.set('namespace.title.nested', 'sync')`}</em>
				</p>
                <p>
					Button <button onClick={(e) => updateSync('sync') }>Update</button> example
					{' '}using <em>{`Store.set('namespace.title.nested', 'sync')`}</em>
				</p>
				<p>
					Async <button onClick={(e) => updateAsync('async') }>Update</button> example
					{' '}using <em>{`Store.update('namespace', {loading: false, title: {nested: 'async'}})`}</em>
				</p>
			</div>
		);
	}
}

export default Testing;
