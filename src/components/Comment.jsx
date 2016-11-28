/**
 * Created by michael on 28/11/2016.
 */
import React from 'react';
import SubmittedBy from './SubmittedBy';
import Vote from './Vote';
import {ButtonToolbar,Button} from 'react-bootstrap';

import {Reply} from './Reply'
export const Comment = React.createClass({

	render: function() {
		const replies = this.props.replies ? this.props.replies.map(function(reply,id) {
			return <Reply key={id}
				name={reply.get("name")}
				description={reply.get("description")}
				modifiedDate={reply.get("modifiedDate")}>
			</Reply>;
		}): <noscript />;


		let solveAnswerButton;
		if(this.props.isSubjectSolved && this.props.isRightAnswer){
			solveAnswerButton =  <ButtonToolbar>
				<Button bsStyle="success" bsSize="xsmall"
				        disabled={true}>
					<span className="glyphicon glyphicon-ok"></span>
					<span> correct answer!</span>
				</Button>
			</ButtonToolbar>
		}
		else if(!this.props.isSubjectSolved){
			solveAnswerButton = <ButtonToolbar>
				<Button bsStyle="default" bsSize="xsmall"
				        onClick={() => this.props.markCorrect(this.props.subjectId,this.props.id)}>
					<span className="glyphicon glyphicon-ok"></span>
					<span> mark as correct answer!</span>
				</Button>
			</ButtonToolbar>
		}



		return 	<div className="comment row">
			<div className="">{this.props.isRightAnswer}</div>

			<div className="col-xs-1">
				<Vote commentId={this.props.id} subjectId={this.props.subjectId} votes={this.props.votes} vote={this.props.vote}/>
			</div>

			<div className="col-xs-10">
				{this.props.description}
				<div className="">{this.props.isSolved}</div>
				<SubmittedBy
					name={this.props.name}
					modifiedDate={this.props.modifiedDate}>
				</SubmittedBy>
				{solveAnswerButton}
				<div>{replies}</div>
			</div>
		</div>;

	}
});
