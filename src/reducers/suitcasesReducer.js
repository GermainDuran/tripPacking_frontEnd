const initialState = []

 const suitcasesReducer = (state=initialState, action) => {

   switch (action.type) {
    case "GET_SUITCASES":
      return [...action.payload]
    case "ADD_SUITCASE":
      return [...state, action.payload]
    case "DELETE_SUITCASE":
      return state.filter((suitcase) => suitcase.id !== action.payload)
    case "EDIT_SUITCASE":
     return state.map((suitcase) => {

        if (suitcase.id === action.payload.id) {
         // debugger
         return action.payload
       } else {
         return suitcase;
       }
     })
    default:
      return state;
  }


 }


 export default suitcasesReducer
