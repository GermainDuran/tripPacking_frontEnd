import React, { Fragment }  from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/tripActions';

 class NewTripForm extends React.Component {

   state = {
       tripName: '',
       tripDate: ''
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
    this.props.addTrip(this.state.tripName, this.state.tripDate, this.props.userId);
    // this.props.addUser(this.state.name, this.state.email, this.state.animalPreference);
    }
  render() {
     return (
       <Fragment>
          <form onSubmit={this.handleSubmit} className="row">
            <div className="input-field col s6">
              <input onChange={this.handleChange} value={this.state.tripName} name="tripName" placeholder="Trip Name" id="trip_name" type="text" autoComplete="off"/>
            <label htmlFor="move_name">Name Your Trip</label>
          </div>
            <div className="input-field col s6">
              <input onChange={this.handleChange} value={this.state.tripDate} name="tripDate"  id="trip_date" type="date" autoComplete="off"/>
              <label htmlFor="move_date">Traveling on...</label>
              <div className="submit-btn">
              <button type="submit" className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small" > Add</button>
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
    userId: state.user.user_id
  }
}


// only going to need to map dispatch to props
function mapDispatchToProps(dispatch) {
  return {
    addTrip: (name, date, userId) => dispatch(addTrip(name, date, userId))
  }
}


 export default connect(mapStateToProps, mapDispatchToProps)(NewTripForm);

 //export default connect(null, mapDispatchToProps)(NewTripForm);
 //export default NewTripForm;
