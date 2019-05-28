import React, { Component } from 'react';
import Map from 'pigeon-maps';
import styles from './PigeonMap.module.css';

class PigeonMap extends Component {
  render() {
    return (
      <div className={styles.MapContainer}>
        <Map
          metaWheelZoom
          zoom={12}
          center={[50.879, 4.6997]}
        />
      </div>
    );
  }
}

export default PigeonMap;
