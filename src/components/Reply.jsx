/**
 * Created by michael on 28/11/2016.
 */
import React from 'react';
import SubmittedBy from './SubmittedBy';

export const Reply = React.createClass({

	render: function() {
		return 	<div className="row reply">
			reply: {this.props.description}
			<SubmittedBy
				name={this.props.name}
				modifiedDate={this.props.modifiedDate}>
			</SubmittedBy>
		</div>;
	}
});
