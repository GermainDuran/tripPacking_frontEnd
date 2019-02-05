const initialState = []

 const belongingsReducer = (state=initialState, action) => {

   switch (action.type) {
    case "GET_TRIP_BELONGINGS":
      // console.log("===========payload", action.payload)
      return [...action.payload]
    case "GET_SUITCASE_BELONGINGS":
      return [...action.payload]
    case "ADD_BELONGING":
   // debugger
     return [...state, action.payload]

     case "DELETE_BELONGING":
       return state.filter((belonging) => belonging.id !== action.payload)

      // case "EDIT_ITEM":
     // return state.map((belonging) => {
     //
     //   if (belonging.id === action.payload.id) {
     //     // debugger
     //     return action.payload
     //   } else {
     //     return belonging;
     //   }
     // })
    default:
      return state;
  }
}

 export default belongingsReducer;
