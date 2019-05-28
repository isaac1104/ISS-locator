import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssData } from '../../actions';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import styles from './PigeonMap.module.css';
import Loader from '../Loader/Loader';
import LocationData from '../LocationData/LocationData';

class PigeonMap extends Component {
  state = {
    is_loading: false
  };

  async componentDidMount() {
    this.setState({ is_loading: true });
    await this.props.fetchIssData();
    this.setState({ is_loading: false });
    setInterval(() => {
      this.props.fetchIssData();
    }, 2000);
  }

  renderMarker() {
    const { latitude, longitude } = this.props.iss_data.data;
    return <Marker anchor={[latitude, longitude]} />;
  }

  renderMap() {
    const { data } = this.props.iss_data;
    if (this.state.is_loading) {
      return <Loader />;
    }
    if (data) {
      return (
        <>
          <Map
            metaWheelZoom
            zoom={3.5}
            center={[data.latitude, data.longitude]}
          >
            {this.renderMarker()}
          </Map>
          <LocationData />
        </>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={styles.MapContainer}>
        {this.renderMap()}
      </div>
    );
  }
}

const mapStateToProps = ({ iss_data }) => {
  return {
    iss_data
  };
};

export default connect(mapStateToProps, { fetchIssData })(PigeonMap);
