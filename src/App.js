import './App.css';
import {Link} from 'react-router';

import React from 'react';
import logo from './logo.svg';

export default React.createClass({
	render: function() {

		return (
			<div className="App">
				<div className="App-header">
					<Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
					<h2>myReactStackOverflow</h2>
				</div>
					<div>{this.props.children}</div>
			</div>
		);

	}
});

