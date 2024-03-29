import React, { PureComponent } from 'react';
import sigmundPhoto from '../Sigmund.jpg'
import './App.scss';
import { Sigmund as sigmundInfo } from '../constants/Characters';

import Maneuver from './Maneuver';
import Abilities from './Abilities';
import Health from './HealthBar'

class App extends PureComponent {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h2 className="characterName">{sigmundInfo.name}</h2>
        <div className="container">
          <div className="characterStatus">
            <img src={sigmundPhoto} className="characterPortrait" alt="characterPortrait" />
            <Health />
          </div>
          <h2>Stances: <strong>Iron Guards Glare, Martial Spirit</strong></h2>
          <Maneuver />
          <Abilities abilitiesArray = {sigmundInfo.feats.concat(sigmundInfo.abilities)} />
        </div>
      </div>
    );
  }
}

export default (App);