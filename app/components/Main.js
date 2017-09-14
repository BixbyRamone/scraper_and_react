// Include React
var React = require("react");
// Here we include all of the sub-components
var Container = require("./Container");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

var Note = require("./Note");
// Requiring our helper for making API calls


// Create the Parent Component
var Main = React.createClass({
	render: function() {
		return(
			<div className="panel panel-default">

				<div className="row">

					<div className="col-md-6 text-center">
						<Container />												
					</div>

					<div className="col-md-6 text-center">
						<Note />
					</div>

				</div>

			</div>
			);
	}
	

});

module.exports = Main;