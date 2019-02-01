import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addSuitcase, editSuitcase} from '../actions/suitcaseActions';
import { withRouter } from 'react-router-dom'

 class NewSuitcaseForm extends React.Component {

   state = {
     suitcaseName: '',
     suitcaseCategory: '',
     editing: false
   }

   componentDidUpdate(prevProps) {
     if (this.props.selectedSuitcase !== prevProps.selectedSuitcase) {
       this.setState({
         suitcaseName: this.props.selectedSuitcase.name,
         suitcaseCategory: this.props.selectedSuitcase.category,
         editing: !this.state.editing
       }, () => console.log("%c componentDidUpdate", 'color: red', this.state))
     }
    }

    handleChange = (event) => {
     console.log(event.target.value);
     this.setState({
       [event.target.name]: event.target.value
     })
   }

   handleSubmit = event => {
    event.preventDefault()
     const { userId, tripId } = this.props.match.params
     if (this.state.editing === false) {

      this.props.addSuitcase(this.state.suitcaseName, this.state.suitcaseCategory, userId, tripId)

      // para limpiar los campos una vez que el usuario le de click submit
      this.setState({
          suitcaseName: '',
          suitcaseCategory: ''
       })
     } else if (this.state.editing === true ) {
       this.props.editSuitcase(this.state.suitcaseName, this.state.suitcaseCategory, userId, tripId, this.props.selectedSuitcase.id)

       // reset form fields
       this.setState({
          suitcaseName: '',
          suitcaseCategory: '',
          editing: false
       })
    }

  }



   render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row">
         <div className="input-field col s6">
          <input onChange={this.handleChange} placeholder="Suitcase name" name="suitcaseName" id="suitcase_name" type="text"  value={this.state.suitcaseName}  autoComplete="off" required/>
         </div>
         <div className="input-field col s6">
           <input onChange={this.handleChange} placeholder="Category" name="suitcaseCategory" id="suitcase_category" type="text" value={this.state.suitcaseCategory}  autoComplete="off" required/>
             <div className="submit-btn">
              <button type="submit" className="addOrEditMoveBtn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                  {this.state.editing ? "Submit" : "Add"}
              </button>
             </div>
          </div>
        </form>
     </Fragment>
    )
   }
  }

  const mapStateToProps = state => {
    return {
      selectedSuitcase: state.selectedSuitcase
    }
  }

const mapDispatchToProps = dispatch => {
  console.log("DISPATCH", dispatch);
  return {
    addSuitcase: (name, category, userId, tripId) => dispatch(addSuitcase(name, category, userId, tripId)),
    editSuitcase: (name, category, userId, tripId, suitcaseId) => dispatch(editSuitcase(name, category, userId, tripId, suitcaseId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewSuitcaseForm));
