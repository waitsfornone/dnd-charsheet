import React from 'react';

function Row(props) {
  return (
    <div className="basic-row">
      {props.value}
    </div>
  );
}

class Sheet extends React.Component {
  renderRow(i) {
    return (
      <Row
        value={i}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
        {this.renderRow(4)}
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (<Sheet />);
  }
}
