import React from 'react';

const MyApp = React.createClass({

  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
});

export default MyApp;
