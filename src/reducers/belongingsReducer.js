const initialState = []

 const belongingsReducer = (state=initialState, action) => {

   switch (action.type) {
    case "GET_TRIP_BELONGINGS":
      // console.log("===========payload", action.payload)
      return [...action.payload]

     default:
      return state;
  }
}

 export default belongingsReducer;
