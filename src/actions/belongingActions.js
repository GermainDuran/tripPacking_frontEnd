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


export function getSuitcaseBelongings(userId, tripId, suitcaseId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}/belongings`)
    .then(r => r.json())
      .then(belongings => {
        // debugger
          return dispatch({type: 'GET_SUITCASE_BELONGINGS', payload: belongings})
      })
  }
}


export function addBelonging(name, image, userId, tripId, suitcaseId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}/belongings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        image: image
      })
    })
    .then(r => r.json())
    .then(newBelonging => {
      // debugger
      return dispatch({ type: "ADD_BELONGING", payload: newBelonging })
    })
  }
}

// DELETE ITEM
export function deleteBelonging(userId, tripId, suitcaseId, belongingId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}/belongings/${belongingId}`, {
      method: 'DELETE'
    })
    return dispatch({ type: 'DELETE_BELONGING', payload: belongingId })
  }
}

 // SELECT ITEM TO EDIT
// export function selectBelonging(belonging) {
//   debugger
//   return {
//     type: 'SELECT_ITEM',
//     payload: item
//   }
// }

 // EDIT ITEM
// export function editItem(name, image, userId, tripId, suitcaseId, itemId) {
//   return(dispatch) => {
//     fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}/items/${itemId}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//       body: JSON.stringify({
//         name: name,
//         image: image
//       })
//     })
//     .then(r => r.json())
//     .then(editedItem => {
//       debugger
//       return dispatch({ type: "EDIT_ITEM", payload: editedItem })
//     })
//   }
// }
