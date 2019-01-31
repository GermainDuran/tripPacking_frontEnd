//import TripAdapter from '../apis/TripAdapter'

export function getTrips(id) {
   return(dispatch) => {
     fetch(`http://localhost:3000/api/v1/users/${id}/trips`)
      .then(r => r.json())
      .then(trips => {
        // debugger
        return dispatch({type: 'GET_TRIPS', payload: trips })
      })
    }
}

// POST TO TRIPS
export function addTrip(name, date, userId) {
  // debugger
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name: name,
          date: date
      })
    })
      .then(r => r.json())
      .then(newTrip => {
        // debugger
        return dispatch({type: 'ADD_TRIP', payload: newTrip})
      })
  }
}



// Delete a Move
// ENDPOINT: http://localhost:3000/api/v1/users/9/trips/9
export function deleteTrip(userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}`, {
      method: 'DELETE'
    })
    return dispatch({type: 'DELETE_TRIP', payload: tripId})
      // .then(r => r.json())
      // .then(deletedTrip => {
      //   return dispatch({type: 'DELETE_TRIP', payload: deletedTrip.id})
      // })
  }
}

// Just trying to fetch Trips!
// export function fetchTripsAction() {
//   return(dispatch) => {
//     fetch(`http://localhost:3000/api/v1/trips/`)
//       .then(r => r.json())
//       .then(trips => {
//         return dispatch({type: 'GET_TRIPS', payload: trips })
//       })
//
//     // TripAdapter.getTrips()
//     // .then(trips =>  {
//     //   dispatch(getTripsAction(trips))
//     //   dispatch({ type: 'FETCHING_ANIMAL' })
//     // })
//   }
// }

//
// export function getTripsAction(trips) {
//      return {
//        type: 'TRIPS',
//        payload: trips
//      }
//    }
