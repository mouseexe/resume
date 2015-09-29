// coop-row.jsx
// created by Jesse Jurman

var React = require('react');
var DoubleRow = require('./double-row');

// The main application
var CoopRow = React.createClass({
  render: function() {
    return (
      <div className="margin-top">

        <DoubleRow>
          <div className="left-align co-op-info">
            {this.props.title}
          </div>
          <div className="right-align co-op-info">
            {this.props.date}
          </div>
        </DoubleRow>

        <div className="center-align co-op-info">
          {this.props.role}
        </div>

        <DoubleRow leftWidth="8" rightWidth="4">
          <div className="left-align content">
            {this.props.children[0]}
          </div>
          <div className="right-align content">
            {this.props.children[1]}
          </div>
        </DoubleRow>

      </div>
    );
  }
});

module.exports = CoopRow;
