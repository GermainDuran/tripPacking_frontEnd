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
    //  console.log("Lanzando handle change",event.target.value) //aqui cuando comienzo a escribir en la forma veo el mensaje en la consola
      this.setState({
      [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
    event.preventDefault();
    //console.log("triggered submit");
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


  render() {
     return (
       <Fragment>
          <form onSubmit={this.handleSubmit} className="row">
            <div className="input-field col s6">
              <input onChange={this.handleChange} placeholder="Trip name" value={this.state.tripName} name="tripName"  id="trip_name" type="text" autoComplete="off" required/>
          </div>
            <div className="input-field col s6">
              <input onChange={this.handleChange} value={this.state.tripDate} name="tripDate"  id="trip_date" type="date" autoComplete="off"/>
              <label htmlFor="move_date">Traveling on...</label>
              <div className="submit-btn">
              <button type="submit" className="btn waves-effect waves-light " >  <i className="material-icons right">send</i> {this.state.editing ? "Submit" : "Add Trip"}</button>
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

    userId: state.user.id,
    selectedTrip: state.selectedTrip
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
