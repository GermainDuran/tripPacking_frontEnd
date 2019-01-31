import React from 'react';
// import { connect } from 'react-redux';
// import { getTrips } from '../actions/tripActions'
import TripList from '../components/TripList'
import NewTripForm from '../components/NewTripForm'

//const tripsIndex = `http://localhost:3000/api/v1/trips/`
class TripContainer extends React.Component {


  // componentDidMount() {
  //   this.props.getTrips()
  //   // fetch(tripsIndex)
  //   // .then(response => response.json())
  //   // .then(trips => {
  //   //   console.log("Fetched Moves:",trips);
  //   // })
  // }

   render() {
    //console.log("TripsContainer props:",this.props.getTrips);
     console.log("TripContainer props:", this.props);
    return (
      <div className="container">
       <h2 id="move-cont-title" className="card-panel white black-text">My Trips</h2>
        <NewTripForm />
        <TripList />
      </div>
    )
  }
}

 // Retrieve the data from within the Redux Store:
// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return {
//     trips: state.trips
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//      getTrips: () => dispatch(getTrips())
//   }
// }


export default TripContainer;
