const initialState = []

 const suitcasesReducer = (state=initialState, action) => {

   switch (action.type) {
    case 'GET_SUITCASES':
      return [...state, ...action.payload]

     default:
      return state;
  }


 }


 export default suitcasesReducer
