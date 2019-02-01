import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteSuitcase, selectSuitcase, prefillForm } from '../actions/suitcaseActions'

 class Suitcase extends React.Component {

   constructor(props) {
       super(props)

        const { name, category, idx } = this.props.suitcase // destructuring

        this.state = {
         name: name,
         category: category,
         idx: idx
       }
     }

      static getDerivedStateFromProps(props, state) {
       if (props.suitcase.name !== state.name || props.suitcase.category !== state.category) {
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
   console.log('editing attempt');
   this.props.selectSuitcase(this.props.suitcase)
   this.props.prefillForm(this.props.suitcase)
 }


render() {
    console.log("suitcase props", this.props);
    return (
      <div className="col s12 m4">
        <div className="card small">
        <p>Suitcase: {this.props.suitcase.id} </p>
          <span className="card-title">
            {this.state.name}

          </span>
        <p>Category: {this.state.category}</p>
        <div style={{align: 'center'}}>
          <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect cyan darken-2">
            <span style={{fontFamily: 'Hammersmith One'}}>X</span>
          </button>
          <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect cyan lighten-2">
          <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
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
    prefillForm: (suitcase) => dispatch(prefillForm(suitcase))
  }
}

 export default withRouter(connect(null, mapDispatchToProps)(Suitcase));
