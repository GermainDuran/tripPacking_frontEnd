const initialState = {
  id: null,
  name: '',
  date: ''
}

 const singleTripReducer = (state=initialState, action) => {

   switch (action.type) {
    case "SELECT_TRIP":
      return {...state, ...action.payload}

     case "PREFILL_FORM":
      return state

     default:
      return state;

   }


 }

 export default singleTripReducer;
