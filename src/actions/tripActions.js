//import TripAdapter from '../apis/TripAdapter'

export function getTrips(id) {
   return(dispatch) => {
     fetch(`http://localhost:3000/api/v1/users/${id}/trips`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
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
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${localStorage.getItem('jwt')}`
       },
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



// Delete a Trip
// ENDPOINT: http://localhost:3000/api/v1/users/9/trips/9
export function deleteTrip(userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}`, {
      method: 'DELETE',
      headers: {  Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    return dispatch({type: 'DELETE_TRIP', payload: tripId})
      // .then(r => r.json())
      // .then(deletedTrip => {
      //   return dispatch({type: 'DELETE_TRIP', payload: deletedTrip.id})
      // })
  }
}

// SELECT MOVE TO EDIT:
export function selectTrip(trip) {
  return {
    type: "SELECT_TRIP",
    payload: trip
  }
}

 // PREFILL EDIT FORM:
export function prefillForm(trip) {
  return {
    type: "PREFILL_FORM"
  }
}

export function editTrip(name, date, userId, tripId) {
  return(dispatch) => {
    	fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json', Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        name: name,
        date: date
      })
    })
      .then(response => response.json())
      .then(editedTrip => {
        // debugger
        return dispatch({type: 'EDIT_TRIP', payload: editedTrip })
      })
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
