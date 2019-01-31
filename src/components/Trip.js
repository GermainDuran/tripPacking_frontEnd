import React from 'react';
import { connect } from 'react-redux';
import { deleteTrip } from '../actions/tripActions'
import { selectTrip } from '../actions/tripActions'
import { prefillForm } from '../actions/tripActions';

 class Trip extends React.Component {

   state = {
     name: this.props.trip.name,
     date: this.props.trip.date
   }

  static getDerivedStateFromProps(props, state) {
    if (props.trip.name !== state.name || props.trip.date !== state.date) {
      return ({
        name: props.trip.name,
        date: props.trip.date
      })
    }
  }

   handleDelete = () => {
     console.log("triggered handleClick");
     this.props.deleteTrip(this.props.userId, this.props.trip.id)
    }

   handleClickToEdit = () => {
     console.log("triggered handleClickToEdit Venezuelaaa");
     this.props.selectTrip(this.props.trip)
     this.props.prefillForm(this.props.trip)
  }


    //esta funcion me cambia el orden de la fecha en la carta, lo muestra como es debido mes, dia y ano
    reformatDate = (date) => {
    // debugger
    if (date) {
      let arrayOfDate = date.split("-")
      let newArrOfDate = []
      newArrOfDate.push(arrayOfDate[1])
      newArrOfDate.push(arrayOfDate[2])
      newArrOfDate.push(arrayOfDate[0])
      return newArrOfDate.join(',').split(',').join("-")
    } else {
          return null;
      }
    }

   render() {
    console.log("trip props", this.props)
    return (
      <div className="col s12 m4">
       <div className="card small move-card">
          <div className="card-content white-text">
            <span className="move_title card-title">
            {this.state.name}
            </span>
            {/*<p>{this.props.trip.date}</p>*/}
              {this.reformatDate(this.state.date)}
          </div>
        <div className="see-boxes-btn">
          <button className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small">See Suitcases</button>
        </div>
        <button onClick={this.handleDelete} className="delete-move-btn btn-floating btn-small waves-effect red accent-3">
         <span style={{fontFamily: 'Hammersmith One'}}>X</span>
       </button>
       <button onClick={this.handleClickToEdit} className="edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
         <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
       </button>
     </div>
   </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user_id,
    selectTrip: state.trip
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    deleteTrip: (userId, tripId) => dispatch(deleteTrip(userId, tripId)),
    selectTrip: (trip) => dispatch(selectTrip(trip)),
    prefillForm: (trip) => dispatch(prefillForm(trip))
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Trip);
 //export default Trip;
