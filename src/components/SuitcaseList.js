import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getSuitcases } from '../actions/suitcaseActions'
import Suitcase from './Suitcase'

 class SuitcaseList extends React.Component {



  componentDidMount() {
    // if (this.props.history.action === "PUSH") {
    //   this.props.getSuitcases(this.props.user.user_id, this.props.trip.id)
    // }
    // const { tripId, userId } = this.props.match.params
    //  this.props.getSuitcases(userId, tripId)
      this.props.getSuitcases(this.props.user.user_id, this.props.trip.id)

   }

   render() {
    console.log("suitcaselist props", this.props);
    const mappedSuitcases = this.props.suitcases.map((suitcase,idx) => {
    return <Suitcase suitcase={suitcase} key={suitcase.id} idx={idx}/>
  })

    return (
      <div className="col s9">
          {mappedSuitcases}
      </div>
    )
  }
}

 const mapStateToProps = state => {
  // debugger
  return {
    trip: state.trip,
    suitcases: state.suitcases,
    user: state.user
  }
}

 const mapDispatchToProps = dispatch => {
  return {
    getSuitcases: (userId, tripId) => dispatch(getSuitcases(userId, tripId))
  }
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuitcaseList))
