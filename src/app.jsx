import React from 'react';

class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="data-group" style={this.props.style}>
        "Group"
      </div>
    )
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="basic-row">
        {this.props.value}
        <Group style={this.props.style}/>
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
        <Row value="Header" style={this.rectangle(100, 50, 1)}/>
        <Row value="Armor Magic Money" />
        <Row value="Throws Attributes" />
        <Row value="Gear Skills Proficiencies" />
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (<Sheet />);
  }
}
