import React from 'react';
import { connect } from 'react-redux';
// connect this one to redux and make class component!!!!!
import { getTrips } from '../actions/tripActions'
import Trip from './Trip'
import { withRouter } from 'react-router-dom'


class TripList extends React.Component {

  componentDidMount() {
    console.log("Venezuela 2:", this.props)
    this.props.getTrips(this.props.user.user.id)

  //}
  }

  render() {

      const mappedTrips = this.props.trips.map((trip) => {
        return <Trip trip={trip} key={trip.id} />
      })


       return (
        <div className="row">
            {mappedTrips}
        </div>
      )
    }
  }  // END CLASS

   // CONNECT TO REDUX STORE:
  // Retrieve the data from within the Redux Store:

 const mapStateToProps = (state) => {
  //console.log("props in triplist", state);
  return {
    trips: state.trips,
    user: state.user
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: (id) => dispatch(getTrips(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripList));
// export default connect(mapStateToProps, mapDispatchToProps)(TripList);
