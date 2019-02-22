import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteSuitcase, selectSuitcase } from '../actions/suitcaseActions'

 class Suitcase extends React.Component {

   constructor(props) {
       super(props)

        const { name, category, idx} = this.props.suitcase // destructuring

        this.state = {
         name: name,
         category: category,
         idx: idx
       }
     }

      static getDerivedStateFromProps(props, state) {
       if (props.suitcase.name !== state.name || props.suitcase.category !== state.category || props.suitcase.idx !== state.idx) {

         return ({
           name: props.suitcase.name,
           category: props.suitcase.category,
           idx: props.suitcase.idx
         })
       }
       return null;
     }


   handleDelete = () => {
      const { userId, tripId } = this.props.match.params
      this.props.deleteSuitcase(userId, tripId, this.props.suitcase.id)
  }

  handleClickToEdit = () => {
   //console.log('editing attempt');
   this.props.selectSuitcase(this.props.suitcase)
   //this.props.prefillForm(this.props.suitcase)
 }
 handleClickToSeeBelongings= () => {
   // console.log("trying to see items");
   const { userId, tripId } = this.props.match.params
    this.props.history.push(`/users/${userId}/trips/${tripId}/suitcases/${this.props.suitcase.id}/belongings`)

 }

render() {
    //console.log("suitcase props", this.props);
    return (

      <div className="col s12 m5">
      <div className="card small box-card">
        { /*  <p style={{fontSize: '20px'}}> Suitcase: {this.state.suitcase.id} </p> */}
          <span className="card-title">
            <div>
            <h5>{this.state.name.toUpperCase()}</h5>

              Category: {this.state.category}
            </div>
          </span>

      {/*  <div style={{marginTop: '70px'}}>
            <h5>Category: {this.state.category}</h5>
        </div>*/}
         <div style={{align: 'center', marginTop: '60px'}}>
          <div className="see-items-btn">
            <button onClick={this.handleClickToSeeBelongings} className="btn waves-effect waves-light">
               Belongings
            </button>
          </div>

          <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect red accent-3">
            <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
          </button>
          <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect red accent-3">
            <span style={{fontFamily: 'Hammersmith One'}}>X</span>
          </button>
            </div>
        </div>
        </div>


    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteSuitcase: (userId, tripId, suitcaseId) => dispatch(deleteSuitcase(userId, tripId, suitcaseId)),
    selectSuitcase: (suitcase) => dispatch(selectSuitcase(suitcase)),
  //  prefillForm: (suitcase) => dispatch(prefillForm(suitcase))
  }
}

 export default withRouter(connect(null, mapDispatchToProps)(Suitcase));
