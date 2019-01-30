const initialState = {
  trips: []
}

 const rootReducer = (state = initialState, action) => {

   switch (action.type) {
     case "GET_TRIPS":
        return {...state, }

     default:
        return state
  }
}



 export default rootReducer;
