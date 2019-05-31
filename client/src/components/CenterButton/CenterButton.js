import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from './CenterButton.module.css';
import { toggleCheckbox } from '../../actions';

class CenterButton extends Component {
  render() {
    const { toggle_checkbox: { checked }, toggleCheckbox } = this.props;

    return (
      <FormControl className={styles.CenterButton}>
        <FormControlLabel
          label='CENTER'
          control={
            <Checkbox
              checked={checked}
              onChange={toggleCheckbox}
              color='primary'
              label='center'
            />
          }
        />
      </FormControl>
    );
  }
}

const mapStateToProps = ({ toggle_checkbox }) => {
  return {
    toggle_checkbox
  };
};

export default connect(mapStateToProps, { toggleCheckbox })(CenterButton);
