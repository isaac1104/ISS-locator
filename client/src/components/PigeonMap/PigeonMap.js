import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssData } from '../../actions';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';
import styles from './PigeonMap.module.css';
import Loader from '../Loader/Loader';
import CenterButton from '../CenterButton/CenterButton';
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
      <Overlay
        anchor={[latitude, longitude]}
        className={styles.Overlay}
        offset={[60, 50]}
      >
        <img src={satellite} alt='satellite' className={styles.ISSIcon} />
      </Overlay>
    );
  }

  renderMap() {
    const { iss_data: { data }, toggle_checkbox: { checked } } = this.props;
    if (this.state.is_loading) {
      return <Loader />;
    }
    if (data) {
      return (
        <>
          <Map
            metaWheelZoom
            zoom={5}
            defaultCenter={[data.latitude, data.longitude]}
            center={checked ? [data.latitude, data.longitude] : []}
            provider={(x, y, z) => {
              const s = String.fromCharCode(97 + (x + y + z) % 3);
              return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
            }}
          >
            {this.renderOverlay()}
          </Map>
          <LocationData />
          <CenterButton />
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

const mapStateToProps = ({ iss_data, toggle_checkbox }) => {
  return {
    iss_data,
    toggle_checkbox
  };
};

export default connect(mapStateToProps, { fetchIssData })(PigeonMap);
