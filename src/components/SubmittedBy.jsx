/**
 * Created by michael on 28/11/2016.
 */
import React from 'react';
import moment from 'moment';

export default React.createClass({
	render: function() {
		return <div className="submitted-by">
			<span>submitted by </span>
			<span className="">{this.props.name}</span>
			<span>. last modified at </span>
			<span>{moment(this.props.modifiedDate).format("DD/MM/YYYY")}</span>
		</div>;
	}
});