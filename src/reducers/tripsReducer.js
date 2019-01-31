const initialState = []


 const tripsReducer = (state = initialState, action) => {

   switch (action.type) {
    case "GET_TRIPS":
      return [...action.payload]
    case "ADD_TRIP":
      return [...state, action.payload]
    case "DELETE_TRIP":
      return state.filter((trip) => trip.id !== action.payload)
    default:
      return state;
  }


 }

 export default tripsReducer
