import React from 'react';

class MyApp extends React.Component {

  render() {
    return (
      <div className="MyApp">{this.props.name}</div>
    );
  }
}

export default MyApp;
