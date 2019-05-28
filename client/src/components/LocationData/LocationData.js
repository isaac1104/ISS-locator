import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import styles from './LocationData.module.css';

class LocationData extends Component {
  convertUnixTimeStamp = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }

  renderCard() {
    const { latitude, longitude, velocity, timestamp, visibility } = this.props.iss_data.data;
    return (
      <CardContent className={styles.LocationDataContainer}>
        <Typography color='textSecondary'>Current Time</Typography>
        <Divider />
        <Typography variant='body2' component='p'>{this.convertUnixTimeStamp(timestamp)}</Typography>
        <Typography color='textSecondary'>Visibility</Typography>
        <Divider />
        <Typography variant='body2' component='p'>{visibility}</Typography>
        <Typography color='textSecondary'>Latitude</Typography>
        <Divider />
        <Typography variant='body2' component='p'>{latitude}</Typography>
        <Typography color='textSecondary'>Longitude</Typography>
        <Divider />
        <Typography variant='body2' component='p'>{longitude}</Typography>
        <Typography color='textSecondary'>Velocity (km/h)</Typography>
        <Divider />
        <Typography variant='body2' component='p'>{velocity}</Typography>
      </CardContent>
    );
  }

  render() {
    return (
      <>
        {this.renderCard()}
      </>
    );
  }
}

const mapStateToProps = ({ iss_data }) => {
  return {
    iss_data
  };
};

export default connect(mapStateToProps)(LocationData)
