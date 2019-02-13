import React from 'react';
import TripList from '../components/TripList'
import NewTripForm from '../components/NewTripForm'
import { withRouter } from 'react-router-dom'
import withAuth from '../HOCs/withAuth'

const TripContainer = (props)=> {



    return (
      <div className="container">
       <h2 className="card-panel white black-text cont-title">My Trips</h2>
        <NewTripForm />
        <TripList />
      </div>
    )
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
export default withAuth(withRouter(TripContainer));
//export default TripContainer;
