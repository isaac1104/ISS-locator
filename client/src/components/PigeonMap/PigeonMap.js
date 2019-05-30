import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssData } from '../../actions';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';
import styles from './PigeonMap.module.css';
import Loader from '../Loader/Loader';
import LocationData from '../LocationData/LocationData';
import satellite from '../../assets/satellite.png';

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
    }, 1000);
  }

  renderOverlay() {
    const { latitude, longitude } = this.props.iss_data.data;
    return (
      <Overlay anchor={[latitude, longitude]} offset={[60, 39]}>
        <img src={satellite} alt='satellite' />
      </Overlay>
    );
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
            zoom={5}
            animate={false}
            width={window.innerWidth}
            height={window.innerHeight}
            defaultCenter={[data.latitude, data.longitude]}
          >
            {this.renderOverlay()}
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
