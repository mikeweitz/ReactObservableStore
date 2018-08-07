import Store, { withStore } from '../../../../../src/ReactObservableStore';
// import { addArticle } from "../js/actions/index";

window.store = store;
// console.log('foo/index', window.store)
// window.addArticle = addArticle;


import React from 'react';
import ReactDOM, { render } from "react-dom";
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Root from './Root';
// import { Provider } from "react-redux";
import Title from '../../Title';

console.log("foo index")
//
// class Foo extends React.Component {
// 	constructor(props) {
//     super(props);
// 		console.log('Foo react tree', props, this)
//   }
//
// 	render () {
// 		console.log('Foo component root')
// 		return (
// 			<Provider store={window.store.default}>
// 				<Router>
// 					<Switch>
// 						<Route exact path="/" component={Main} />
// 						<Route path="/title/:param" render={(props) => <Title foo="bar" {...props} />} />
// 					</Switch>
// 				</Router>
// 			</Provider>
// 		)
// 	}
// }
//
// export default withRouter(Foo)



	// render (
	// 	<Router>
	// 		<Switch>
	// 			<Route exact path="/" component={Main} />
	// 			<Route path="/title/:param" render={(props) => <Title foo="bar" {...props} />} />
	// 		</Switch>
	// 	</Router>,
	// 	document.getElementById('foo')
	// )


ReactDOM.render(<Root />, document.getElementById('app'));
