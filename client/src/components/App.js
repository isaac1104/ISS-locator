import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { fetchIssData } from '../actions';
import Loader from './Loader/Loader';
import PigeonMap from './PigeonMap/PigeonMap';

class App extends Component {
  componentDidMount() {
    this.props.fetchIssData();
  }

  renderIssData() {
    const { is_fetching, data } = this.props.iss_data;
    if (is_fetching) {
      return <Loader />;
    }
    if (data) {
      return (
        <>
          <Typography variant='h5' gutterBottom>{data.latitude}, {data.longitude}</Typography>
          <PigeonMap />
        </>
      )
    }

    return null;
  }

  render() {
    console.log(this.props.iss_data);
    return (
      <>
        {this.renderIssData()}
      </>
    );
  }
}

const mapStateToProps = ({ iss_data }) => {
  return {
    iss_data
  };
};

export default connect(mapStateToProps, { fetchIssData })(App);
