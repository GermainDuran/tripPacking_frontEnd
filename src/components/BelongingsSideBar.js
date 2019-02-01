import React from 'react'
import { connect } from 'react-redux';
import { getTripBelongings } from '../actions/belongingActions'
import { withRouter } from 'react-router-dom'


 class BelongingsSideBar extends React.Component {


   componentDidMount() {
     const { tripId, userId } = this.props.match.params
     this.props.getTripBelongings(userId, tripId)
    }



   render() {

     const tripBelongings = this.props.tripBelongings.map((tripItem) => {
     return <li key={tripItem.id}>{tripItem.name} -- Suitcase: {tripItem.suitcase_id}</li>
   })

    return (
      <div className="col s3" style={{border: 'ridge #4dd0e1 3px', paddingTop: '5px', marginTop: '15px'}}>
      <h5>ALL ITEMS ASSOCIATED W THIS MOVE</h5>
            {tripBelongings}
      </div>
    )
  }

 }

 const mapStateToProps = state => {
   // console.log("STATE",state);
   return {
     trip: state.trip,
     user: state.user,
     tripBelongings: state.tripBelongings
   }
 }

 const mapDispatchToProps = dispatch => {
  return {
    getTripBelongings: (userId, tripId) => dispatch(getTripBelongings(userId, tripId))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BelongingsSideBar));
//export default connect(mapStateToProps)(BelongingsSideBar);
 // export default BelongingsSideBar
