import React, { Component, Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const PigeonMap = lazy(() => import('./PigeonMap/PigeonMap'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <PigeonMap />
      </Suspense>
    );
  }
}

export default App;
