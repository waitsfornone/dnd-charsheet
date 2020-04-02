import React from 'react';

function rectangle(width, height, border) {
  const styleObj = {
    width: width,
    height: height,
    border: `${border}px solid #000`,
  };
  return styleObj;
}

function HeaderRow() {
  // this is the top row of data for the sheet
  return (
    <div className="basic-row">
      <div className="group" id="character">
        <img className="profile-image" src="../pics/my_pic.jpg" alt="gen_face.png" height="100" width="100" />
        <p id="char-name">Lyque</p>
      </div>
      <div className="group" id="char-info" style={rectangle(200, 100, 1)}>
        blah
      </div>
      <div className="group" id="char-hp">
        HP/HP
      </div>
      <div className="group" id="char-inspiration">
        Inspiration
      </div>
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
        <HeaderRow />
        {/* <Row value="Armor Magic Money" />
        <Row value="Throws Attributes" />
        <Row value="Gear Skills Proficiencies" /> */}
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (<Sheet />);
  }
}
