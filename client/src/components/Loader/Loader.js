import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
