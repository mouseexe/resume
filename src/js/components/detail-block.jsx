// detail-block.jsx
// created by Jesse Jurman

var React = require('react');

// The main application
var DetailBlock = React.createClass({
  render: function() {
    var titleBlock;
    if (this.props.title == "") {
      titleBlock =
        <div className="detail-header blank hidden-print">
          "____"
        </div>
    }
    else if (this.props.title) {
      titleBlock =
        <div className="detail-header">
          {this.props.title}
        </div>
    }
    else {
      titleBlock = <div></div>
    }
    return (
      <div>
        {titleBlock}
        <div className="detail-content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = DetailBlock;
