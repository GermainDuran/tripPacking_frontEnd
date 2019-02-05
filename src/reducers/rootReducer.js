import { combineReducers } from 'redux';
import tripsReducer from './tripsReducer'
import userReducer from './userReducer'
import singleTripReducer from './singleTripReducer'
import suitcasesReducer from './suitcasesReducer'
import belongingsReducer from './belongingsReducer'
import singleSuitcaseReducer from './singleSuitcaseReducer'
import singleBelongingReducer from './singleBelongingReducer'


const rootReducer = combineReducers({ trips: tripsReducer, user: userReducer, selectedTrip: singleTripReducer, suitcases: suitcasesReducer,selectedSuitcase: singleSuitcaseReducer, belongings: belongingsReducer, selectedBelonging: singleBelongingReducer  })




// const initialState = {
//   trips: []
// }
//
//  const rootReducer = (state = initialState, action) => {
//
//    switch (action.type) {
//      case "GET_TRIPS":
//          return {...state, trips: [...state.trips, ...action.payload]}
//
//      default:
//         return state
//   }
// }
//
//
//
 export default rootReducer;
