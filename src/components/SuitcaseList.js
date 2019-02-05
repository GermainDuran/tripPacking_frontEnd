import React from 'react';
import Suitcase from './Suitcase'
import { withRouter } from 'react-router-dom'

// class SuitcaseList extends React.Component {

const SuitcaseList = (props) => {


  // componentDidMount() {
  //   // if (this.props.history.action === "PUSH") {
  //   //   this.props.getSuitcases(this.props.user.user_id, this.props.trip.id)
  //   // }
  //   const { tripId, userId } = this.props.match.params
  //   this.props.getSuitcases(userId, tripId)
  // //    this.props.getSuitcases(this.props.user.user_id, this.props.trip.id)
  //
  //  }

   // render() {
  //  console.log("suitcaselist props", props);
  //   const mappedSuitcases = this.props.suitcases.map((suitcase,idx) => {
  //   return <Suitcase suitcase={suitcase} key={suitcase.id} idx={idx}/>
  // })


    //  const filteredSuitcases = this.props.suitcases.filter((suitcase) => {
    //   return this.props.belongingSuitcaseIds.includes(suitcase.id)
    // })

     const mappedSuitcases = props.suitcases.map((suitcase) => {
      return <Suitcase suitcase={suitcase} key={suitcase.id} />
    })


    return (
      <div className="col s9">
          {mappedSuitcases}
      </div>
    )
  }


//  const mapStateToProps = state => {
//   // debugger
//   return {
//   //  trip: state.trip,
//     suitcases: state.suitcases,
//   //  user: state.user
//   }
// }
//
//  const mapDispatchToProps = dispatch => {
//   return {
//     getSuitcases: (userId, tripId) => dispatch(getSuitcases(userId, tripId))
//   }
// }

 export default withRouter(SuitcaseList)
