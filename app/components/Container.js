var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

var Article = require('./Article');

var Container = React.createClass({

	render: function() {
		return(
			<div className="panel panel-default">
				<Article />
			</div>
			)
	}
})

module.exports = Container;