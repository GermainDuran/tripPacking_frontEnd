import React from 'react'

// import { getTripBelongings } from '../actions/belongingActions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

 class BelongingsSideBar extends React.Component {


   // componentDidMount() {
   //   const { tripId, userId } = this.props.match.params
   //   // const userId = 12
   //   // const tripId = 30
   //   this.props.getTripBelongings(userId, tripId)
   //  }



   render() {
      console.log("BelongingSideBar PROPS carla", this.props);
   //   const tripBelongings = this.props.tripBelongings.map((tripBelongings) => {
   //   return <li key={tripBelongings.id}>{tripBelongings.name} -- Suitcase:{tripBelongings.suitcase_id}</li>
   // })

    //  const filteredItems = this.props.tripBelongings.filter((item) => {
    //   return item.name.toLowerCase().includes(this.props.searchTerm)
    // })

     const tripBelongings = this.props.belongings.map((belonging) => {
      // let suitcase = this.props.suitcases.find((suitcase) => suitcase.id === belonging.suitcase_id)
      let suitcase = this.props.suitcases.find((suitcase) => suitcase.id === belonging.suitcase_id)
      let idx = this.props.suitcases.indexOf(suitcase)

      return  <li className="item-li" key={belonging.id} style={{fontFamily: 'Josefin Sans', fontSize: '18px', color: 'black'}}>
              {belonging.name}: <span style={{fontWeight: 'bold'}}> - Suitcase: {idx+1}</span></li>
    })

      return (
        <div  id="side-bar" className="col s3 z-depth-3" style={{border: 'ridge #4dd0e1 3px', marginTop: '15px', textAlign: 'center'}}>

        <h5 className="card title">Belongings </h5>
            <div style={{textAlign: 'left'}}>
            {tripBelongings}
            </div>
        </div>
    )
  }

 }

 const mapStateToProps = state => {

   return {
      suitcases: state.suitcases
    }
}

export default withRouter(connect(mapStateToProps)(BelongingsSideBar))
//  const mapStateToProps = state => {
//    // console.log("STATE",state);
//    return {
//      trip: state.trip,
//      user: state.user,
//      tripBelongings: state.belongings
//    }
//  }
//
//  const mapDispatchToProps = dispatch => {
//   return {
//     getTripBelongings: (userId, tripId) => dispatch(getTripBelongings(userId, tripId))
//   }
// }
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BelongingsSideBar));
//export default connect(mapStateToProps)(BelongingsSideBar);
  //export default withRouter(BelongingsSideBar)
