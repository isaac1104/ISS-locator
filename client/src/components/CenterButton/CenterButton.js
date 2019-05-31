import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from './CenterButton.module.css';

class CenterButton extends Component {
  state = {
    checked: true
  }

  handleChange = event => {
    this.setState({ checked: !this.state.checked });
    console.log(this.state.checked);
  }

  render() {
    return (
      <FormControl className={styles.CenterButton}>
        <FormControlLabel
          label='CENTER'
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={event => this.handleChange(event)}
              value='checkedB'
              color='primary'
              label='center'
            />
          }
        />
      </FormControl>
    );
  }
}

export default CenterButton;
