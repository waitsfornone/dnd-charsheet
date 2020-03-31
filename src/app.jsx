import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="basic-row" style={this.state.style}>
        {this.state.value}
      </div>
    );
  }
}

class Sheet extends React.Component {
  // this should probably just update the props to pass to the object I really want?
  rectangle(width, height, border) {
    const styleObj = {
      width: width,
      height: height,
      border: "1px solid #000",
    };
    return styleObj;
  }

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
        <Row value="1" />
        <Row value="2" style={this.rectangle(100, 50, 1)} />
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
