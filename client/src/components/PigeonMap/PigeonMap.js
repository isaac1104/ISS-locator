import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import styles from './PigeonMap.module.css';

class PigeonMap extends Component {
  render() {
    const { latitude, longitude } = this.props.iss_data.data;
    return (
      <div className={styles.MapContainer}>
        <Map
          metaWheelZoom
          zoom={4}
          center={[latitude, longitude]}
        >
          <Marker
            anchor={[latitude, longitude]}
          />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = ({ iss_data }) => {
  return {
    iss_data
  };
};

export default connect(mapStateToProps)(PigeonMap);
