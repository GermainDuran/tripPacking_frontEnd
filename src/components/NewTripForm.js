import React, { Fragment }  from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/tripActions';
import { prefillForm } from '../actions/tripActions';
import { editTrip } from '../actions/tripActions';



 class NewTripForm extends React.Component {

   state = {
       tripName: '',
       tripDate: '',
       editing: false
       //currentUserid: 9
     }

   handleChange = event => {
      console.log("Lanzando handle change",event.target.value) //aqui cuando comienzo a escribir en la forma veo el mensaje en la consola
      this.setState({
      [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
    event.preventDefault();
    console.log("triggered submit");
    if (this.state.editing === false) { // CREATE MODE
      this.props.addTrip(this.state.tripName, this.state.tripDate, this.props.userId);

       this.setState({ // clear fields once u submit
        tripName: '',
        tripDate: ''
      })

     } else if (this.state.editing === true) {
        this.props.editTrip(this.state.tripName, this.state.tripDate, this.props.userId, this.props.selectedTrip.id)

         this.setState({
          tripName: '',
          tripDate: '',
          editing: false
        })
    }
    }

    componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
    if (this.props.selectedTrip !== prevProps.selectedTrip) {
      this.setState({
        tripName: this.props.selectedTrip.name,
        tripDate: this.props.selectedTrip.date,
        editing: !this.state.editing
      }, () => console.log("componentDidUpdate", this.state))
    }
  }
  render() {
     return (
       <Fragment>
          <form onSubmit={this.handleSubmit} className="row">
            <div className="input-field col s6">
              <input onChange={this.handleChange} value={this.state.tripName} name="tripName" placeholder="Trip Name" id="trip_name" type="text" autoComplete="off" required/>
            <label htmlFor="move_name">Name Your Trip</label>
          </div>
            <div className="input-field col s6">
              <input onChange={this.handleChange} value={this.state.tripDate} name="tripDate"  id="trip_date" type="date" autoComplete="off"/>
              <label htmlFor="move_date">Traveling on...</label>
              <div className="submit-btn">
              <button type="submit" className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small" > {this.state.editing ? "Submit" : "Add"}</button>
            </div>
          </div>
          </form>
       </Fragment>
    )
  }
}

function mapStateToProps(state) {
  console.log("state in NewTripForm", state);
  return {
    userId: state.user.user_id,
    selectedTrip: state.trip
  }
}


// only going to need to map dispatch to props
function mapDispatchToProps(dispatch) {
  return {
    addTrip: (name, date, userId) => dispatch(addTrip(name, date, userId)),
    prefillForm: (trip) => dispatch(prefillForm(trip)),
    editTrip: (name, date, userId, tripId) => dispatch(editTrip(name, date, userId, tripId))
  }
}


 export default connect(mapStateToProps, mapDispatchToProps)(NewTripForm);

 //export default connect(null, mapDispatchToProps)(NewTripForm);
 //export default NewTripForm;
