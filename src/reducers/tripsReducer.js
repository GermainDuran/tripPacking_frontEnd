const initialState = []


 const tripsReducer = (state = initialState, action) => {

   switch (action.type) {
    case "GET_TRIPS":
      return [...action.payload]
    case "ADD_TRIP":
      return [...state, action.payload]
    case "DELETE_TRIP":
      return state.filter((trip) => trip.id !== action.payload)
    case "EDIT_TRIP":
      return state.map((trip) => {
        if (trip.id === action.payload.id) {
          // debugger
          return action.payload
        } else {
          return trip;
        }
      })
    default:
      return state;
  }


 }

 export default tripsReducer
