import React, { PureComponent } from 'react';
import sigmundPhoto from '../Sigmund.jpg'
import './App.scss';
import { Sigmund as sigmundInfo } from '../constants/Characters';

import Maneuver from './Maneuver';


class App extends PureComponent {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="characterName">{sigmundInfo.name}</header>
        <div className="container">
          <img src={sigmundPhoto} className="characterPortrait" alt="characterPortrait" />
          <p>Stances: <strong>Iron Guards Glare, Martial Spirit</strong></p>
          <Maneuver maneuverObject = {sigmundInfo.maneuvers} />
        </div>
      </div>
    );
  }
}

export default (App);
