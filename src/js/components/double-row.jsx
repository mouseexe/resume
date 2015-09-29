// double-row.jsx
// created by Jesse Jurman

var React = require('react');

// The main application
var DoubleRow = React.createClass({
  render: function() {
    var titleBlock;
    if (this.props.title) {
      titleBlock =
        <div className="row margin-top">
          <div className="col-xs-12">
            <div className="header">
              {this.props.title}
            </div>
          </div>
        </div>
    }
    else {
      titleBlock = <div></div>
    }

    var leftWidth = "col-xs-" + (this.props.leftWidth || "6");
    var rightWidth = "col-xs-" + (this.props.rightWidth || "6");

    return (
      <div>
        {titleBlock}
        <div className="row">
          <div className={leftWidth}>
            {this.props.children[0]}
          </div>
          <div className={rightWidth}>
            {this.props.children[1]}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DoubleRow;
