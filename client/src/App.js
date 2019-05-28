import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssData } from './actions';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  componentDidMount() {
    this.props.fetchIssData();
  }

  render() {
    console.log(this.props.iss_data);
    return (
      <div>
        <h1>App</h1>
        <CircularProgress />
      </div>
    );
  }
}

const mapStateToProps = ({ iss_data }) => {
  return {
    iss_data
  };
};

export default connect(mapStateToProps, { fetchIssData })(App);
