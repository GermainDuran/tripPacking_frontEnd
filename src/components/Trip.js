import React from 'react';
import { connect } from 'react-redux';
import { deleteTrip } from '../actions/tripActions'

 class Trip extends React.Component {

   handleClick = () => {
      console.log("triggered handleClick");
      this.props.deleteTrip(this.props.userId, this.props.trip.id)
    }
   render() {
    console.log("trip props", this.props)
    return (
      <div className="col s12 m6">
       <div className="card small move-card">
          <div className="card-content black-text">
            <span className="move_title card-title">{this.props.trip.name}</span>
            <p>{this.props.trip.date}</p>
        </div>
        <div className="see-boxes-btn">
          <button className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small">See Suitcases</button>
        </div>
         <button onClick={this.handleClick} className="delete-move-btn btn-floating btn-small waves-effect waves-light red">X</button>
      </div>
    </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user_id
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    deleteTrip: (userId, tripId) => dispatch(deleteTrip(userId, tripId))
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Trip);
 //export default Trip;
