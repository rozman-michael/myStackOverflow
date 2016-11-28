/**
 * Created by michael on 28/11/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import SubmittedBy from './SubmittedBy';

import * as actionCreators from '../action_creators';

export const Subjects = React.createClass({

	render: function() {
		const getSubjectView = (subject, id) => {
			return <div key={id} className="question-summary">
					<div className="row">
						<div className="col-xs-2 left-details">
							<div className="col-xs-1">{subject.get("votes")} <span className="xs-text">votes</span></div>
							<div className="col-xs-1">{subject.get("numberOfComments")} <span className="xs-text">comments</span></div>
						</div>

						<div className="col-xs-10 summary">
							<Link to={"/subject/"+id}>
								<div>{subject.get("subject")}</div>
							</Link>
							<SubmittedBy
								name={subject.get("name")}
								modifiedDate={subject.get("modifiedDate")}>
							</SubmittedBy>
						</div>
				</div>

			</div>;
		};
		const solved = this.props.solved.map(function(subject,id) {
			return getSubjectView(subject,id);
		});

		const unsolved = this.props.unsolved.map(function(subject,id) {
			return getSubjectView(subject,id);
		});

		return <div className="subjects container">
			<div className="subheader">Unsolved Questions</div>
			<div className="unsolved">{unsolved}</div>
			<div className="subheader">Solved Questions</div>
			<div className="solved">{solved}</div>
		</div>;
	}
});


function mapStateToProps(state,ownProps) {
	const sorted = state.get("subjects").sortBy((value,key) => value.get("modifiedDate")).reverse();
	const solved = sorted.filter(subject => subject.get("isSolved"));
	const unsolved = sorted.filter(subject => subject.get("isSolved")=== false);

	return {
		solved: solved,
		unsolved : unsolved
	}
}

export const SubjectsContainer = connect(
	mapStateToProps,
	actionCreators
)(Subjects);

