const initialState =
{
  id: null,
  name: '',
  image: ''
}

 const singleBelongingReducer = (state=initialState, action) => {

   switch (action.type) {

     // case "SELECT_ITEM":
    //   return {...state, ...action.payload}

     default:
      return state;

   }
}


 export default singleBelongingReducer
