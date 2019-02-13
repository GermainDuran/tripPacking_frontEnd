export function getSuitcases(userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
      .then(r => r.json())
      .then(suitcases => {
        //console.log("Venezuela Bonita:",suitcases)
        return dispatch({type: 'GET_SUITCASES', payload: suitcases})
      })
  }
}

// esto es para crear una suitcase, luego de que se ha creado el viaje, segunda pagina
export function addSuitcase(name, category, userId, tripId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        name: name,
        category: category
      })
    })
      .then(r => r.json())
      .then(newSuitcase => {
        return dispatch({type: 'ADD_SUITCASE', payload: newSuitcase})
      })
  }
}

export function deleteSuitcase(userId, tripId, suitcaseId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}`, {
      method: 'DELETE',
      headers: {  Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
      return dispatch({type: 'DELETE_SUITCASE', payload: suitcaseId})
  }
}

export function selectSuitcase(suitcase) {
  return {
    type: "SELECT_SUITCASE",
    payload: suitcase
  }
}

//
// export function prefillForm(suitcase) {
//   return {
//     type: "PREFILL_FORM"
//   }
// }
export function editSuitcase(name, category, userId, tripId, suitcaseId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases/${suitcaseId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        name: name,
        category: category
      })
    })
      .then(r => r.json())
      .then(editedSuitcase => {

        return dispatch({ type: "EDIT_SUITCASE", payload: editedSuitcase })
      })
  }
}
