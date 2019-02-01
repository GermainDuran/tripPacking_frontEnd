export function getTripBelongings(userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases`)
      .then(r => r.json())
      .then(belongings => {
        let nestedArrayOfItems = belongings.map(function(suitcase) {return suitcase.belongings})
        let arrayOfItems = [].concat.apply([], nestedArrayOfItems)
        // debugger
        return dispatch({type: 'GET_TRIP_BELONGINGS', payload: arrayOfItems })
      })
  }
}
