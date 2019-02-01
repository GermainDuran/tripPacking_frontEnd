export function getSuitcases(userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases`)
      .then(r => r.json())
      .then(suitcases => {
        console.log("Venezuela Bonita:",suitcases)
        return dispatch({type: 'GET_SUITCASES', payload: suitcases})
      })
  }
}
