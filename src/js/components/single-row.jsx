// single-row.jsx
// created by Jesse Jurman

var React = require('react');

// The main application
var SingleRow = React.createClass({
  render: function() {
    return (
      <div className="row margin-top">
        <div className="col-xs-12">
          <div className="header">
            {this.props.title}
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SingleRow;
