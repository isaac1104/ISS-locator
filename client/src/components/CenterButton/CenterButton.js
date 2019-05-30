import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './CenterButton.module.css';

class CenterButton extends Component {
  render() {
    return (
      <Button
        color='primary'
        variant='contained'
        className={styles.CenterButton}
      >
        Center
      </Button>
    );
  }
}

export default CenterButton;
