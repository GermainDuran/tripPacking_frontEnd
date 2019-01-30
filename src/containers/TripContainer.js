import React from 'react';
import { connect } from 'react-redux';
import { getTrips } from '../actions/tripActions'

const allTrips = `http://localhost:3000/api/v1/trips/`
class TripContainer extends React.Component {

   // state = {
  //   tris: []
  // }
  //
  componentDidMount() {
    fetch(allTrips)
    .then(response => response.json())
    .then(trips => {
      console.log("Fetched Moves:",trips);
    })
  }

   render() {
    console.log("TripsContainer props:",this.props);
    return (
      <div>TripContainer</div>
    )
  }
}

 // Retrieve the data from within the Redux Store:
const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: () => { dispatch({ type: 'GET_TRIPS'})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
