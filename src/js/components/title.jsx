// title.jsx
// created by Jesse Jurman

var React = require('react');

// The main application
var Title = React.createClass({
  render: function() {
    return (
      <div className="row margin-top">
        <div className="col-xs-12">
          <div className="title">{this.props.title}</div>
        </div>
      </div>
    );
  }
});

module.exports = Title;
