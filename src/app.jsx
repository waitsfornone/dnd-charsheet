import React from 'react';

function HeaderRow() {
  // this is the top row of data for the sheet
  return (
    <div className="basic-row">
      <div className="group" id="character">
        <img className="profile-image" src="../pics/my_pic.jpg" alt="gen_face.png" height="100" width="100" />
        <p id="char-name">Lyque</p>
      </div>
      <div className="group" id="char-info">
        <div className="group" id="pers-info">
          <div className="group-col">
            <p>Class</p>
            <p>Race</p>
          </div>
          <div className="group-col">
            <p>Background</p>
            <p>Alignment</p>
          </div>
        </div>
        {/* This will need to determine if the game is points based and remove the bottom number if it is milestones  */}
        <div className="group-col">
          <p>Experience Gained</p>
          <p>Experience for next level</p>
        </div>
        <p>Level</p>
      </div>
      <div className="group" id="char-hp">
        <div className="group-col">
          <p>HP/HP</p>
          <p>Temp HP</p>
        </div>
      </div>
      <div className="group" id="char-inspiration">
        Inspiration
      </div>
    </div>
  );
}

class Sheet extends React.Component {

  // renderRow(i) {
  //   return (
  //     <Row
  //       value={i}
  //     />
  //   );
  // }

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
