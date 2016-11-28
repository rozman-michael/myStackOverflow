import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';
import {SubjectsContainer} from './components/Subjects';
import {SubjectContainer} from './components/Subject';
import { createStore } from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let store = createStore(reducer);

const routes = <Route component={App}>
	<Route path="/" component={SubjectsContainer} />
	<Route path="/subjects" component={SubjectsContainer} />
	<Route path="/subject/:id" component={SubjectContainer} />
</Route>;


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('root')
);