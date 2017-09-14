var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");


var Article = React.createClass({

	getInitialState: function() {
    return {
      title: "words",
      link: "links"
    };
  },

	render: function() {
		
			return (
				<div className = "panel panel-default">
					<h2>this.state.name</h2>
				</div>
				)
			
	}
});

module.exports = Article;
