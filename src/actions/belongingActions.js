export function getTripBelongings(userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    })
      .then(r => r.json())
      .then(belongings => {
        let nestedArrayOfBelongings = belongings.map(function(suitcase) {return suitcase.belongings})
        let arrayOfBelongings = [].concat.apply([], nestedArrayOfBelongings)
        return dispatch({type: 'GET_TRIP_BELONGINGS', payload: arrayOfBelongings })
      })
  }
}


export function getSuitcaseBelongings(userId, tripId, suitcaseId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}/belongings`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    })
    .then(r => r.json())
      .then(belongings => {
          return dispatch({type: 'GET_SUITCASE_BELONGINGS', payload: belongings})
      })
  }
}


export function addBelonging(name, image, userId, tripId, suitcaseId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}/belongings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        name: name,
        image: image
      })
    })
    .then(r => r.json())
    .then(newBelonging => {
      // debugger
      console.log("yaya 1")
      return dispatch({ type: "ADD_BELONGING", payload: newBelonging })
    })
  }
}

export function deleteBelonging(userId, tripId, suitcaseId, belongingId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}/belongings/${belongingId}`, {
      method: 'DELETE',
      headers: {  Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    return dispatch({ type: 'DELETE_BELONGING', payload: belongingId })
  }
}

// export function selectBelonging(belonging) {
//   debugger
//   return {
//     type: 'SELECT_BELONGING',
//     payload: item
//   }
// }

// export function editItem(name, image, userId, tripId, suitcaseId, itemId) {
//   return(dispatch) => {
//     fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${tripId}/belongings/${belongingId}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//       body: JSON.stringify({
//         name: name,
//         image: image
//       })
//     })
//     .then(r => r.json())
//     .then(editedBelonging => {
//       debugger
//       return dispatch({ type: "EDIT_BELONGING", payload: editedBelonging })
//     })
//   }
// }
