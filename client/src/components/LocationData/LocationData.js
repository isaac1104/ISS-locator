import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './LocationData.module.css';

class LocationData extends Component {
  renderCard() {
    return (
      <CardContent className={styles.LocationDataContainer}>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be

          lent
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    )
  }

  render() {
    return (
      <>
        {this.renderCard()}
      </>
    );
  }
}

export default LocationData;
