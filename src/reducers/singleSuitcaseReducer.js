const initialState = {
  id: null,
  name: '',
  category: ''
}

 const singleSuitcaseReducer = (state=initialState, action) => {

   switch (action.type) {
    case "SELECT_SUITCASE":
      return {...state, ...action.payload}

     case "PREFILL_FORM":
      return state

     default:
      return state;

   }


 }

 export default singleSuitcaseReducer;
