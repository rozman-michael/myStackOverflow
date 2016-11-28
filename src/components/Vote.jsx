import React from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';

export default React.createClass({

	getInitialState: function() {
		return {voted: false};
	},

	isDisabled: function() {
		return this.state.voted;
	},

	vote: function(num) {
		this.props.vote(num,this.props.subjectId,this.props.commentId);
		this.setState({voted: true});
	},

	render: function() {
		return <div className="voting">
			<ButtonToolbar>
				<Button bsStyle="primary" bsSize="xsmall"
				        disabled={this.isDisabled()}
				        onClick={this.vote.bind(this,1)}>
					<span className="glyphicon glyphicon-menu-up"></span>
				</Button>
			</ButtonToolbar>

			<div className="num-of-votes">{this.props.votes}</div>

			<ButtonToolbar>
				<Button bsStyle="primary" bsSize="xsmall"
				        disabled={this.isDisabled()}
				        onClick={this.vote.bind(this,-1)}>
					<span className="glyphicon glyphicon-menu-down"></span>
				</Button>
			</ButtonToolbar>
		</div>;
	}
});