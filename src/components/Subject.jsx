/**
 * Created by michael on 28/11/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actionCreators from '../action_creators';
import {Comment} from './Comment'
import SubmittedBy from './SubmittedBy';
import Vote from './Vote';

import {ButtonToolbar,Button} from 'react-bootstrap';

export const Subject = React.createClass({

	render: function() {
		const subjectId = this.props.id;
		const vote = this.props.vote;
		const markCorrect = this.props.markCorrect;
		const subjectSolved = this.props.isSolved;

		const comments = this.props.comments.map(function(comment,id) {
			return <Comment key={id}
				name={comment.get("name")}
				description={comment.get("description")}
				votes={comment.get("votes")}
				modifiedDate={comment.get("modifiedDate")}
				isRightAnswer={comment.get("isRightAnswer")}
				replies={comment.get("replies")}
				id={id}
			    subjectId={subjectId}
				vote={vote}
				isSubjectSolved={subjectSolved}
				markCorrect={markCorrect}>
			</Comment>;
		});

		return 	<div className="subject container">
			<div className="row">
				<Link to="/" >back to home</Link>

				<h2 className="col-sm-12 subheader">{this.props.subject}{this.props.isSolved ? " (Solved)" : ""}</h2>

			<div className="col-xs-1">
				<Vote subjectId={this.props.id} votes={this.props.votes} vote={this.props.vote}/>
			</div>

			<div className="col-xs-11">
				subject: {this.props.description}
				<div className="">{this.props.isSolved}</div>

				<SubmittedBy
					name={this.props.name}
					modifiedDate={this.props.modifiedDate}>
				</SubmittedBy>
			</div>
			</div>
			<div>
				<h3 className="">{this.props.numberOfComments} Comments</h3>
				<div>{comments}</div>
			</div>
			<div className="your-answer">
				<h3>Your Answer</h3>
				<textarea id="your-answer" rows="6">

				</textarea>

				<ButtonToolbar>
					<Button bsStyle="primary" bsSize="small"
					        onClick={() => {this.props.addAnswer(this.props.id,document.getElementById('your-answer').value);
						        document.getElementById('your-answer').value=""}}>
						<span className="glyphicon glyphicon-ok"></span>
						<span> Post You Answer</span>
					</Button>
				</ButtonToolbar>
			</div>

		</div>;

	}
});

function mapStateToProps(state,ownProps) {
	const subject = state.get('subjects').get(ownProps.params.id);
	return {
		subject : subject.get("subject"),
		description : subject.get("description"),
		name : subject.get("name"),
		votes : subject.get("votes"),
		modifiedDate : subject.get("modifiedDate"),
		numberOfComments : subject.get("numberOfComments"),
		isSolved : subject.get("isSolved"),
		comments : subject.get("comments"),
		id:ownProps.params.id
	}
}

export const SubjectContainer = connect(
	mapStateToProps,
	actionCreators
)(Subject);

