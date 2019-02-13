import React, { Fragment } from 'react'
import { addBelonging } from '../actions/belongingActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

 class NewBelongingForm extends React.Component {
  // create a controlled form;
  state = {
    name: '',
    image: '',
    // editing: false
  }

//  // Triggers the form to prefill when u click edit btn, updating local state values

  // componentDidUpdate(prevProps) {
  //   console.log("MAduro",this.props)
  //   if (this.props.selectedBelonging !== prevProps.selectedBelonging) {
  //     this.setState({
  //       name: this.props.selectedBelonging.name,
  //       image: this.props.selectedBelonging.image,
  //     }, () => console.log("%c componentDidUpdate", 'color: red', this.state))
  //   }
  //  }

   handleChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state.name)
    // console.log(this.state.image)
  }

  handleSubmit = (event) => {
   event.preventDefault()

    const { userId, tripId, suitcaseId } = this.props.match.params
    // if (this.state.editing === false) {

    this.props.addBelonging(this.state.name, this.state.image, userId, tripId, suitcaseId)
    this.setState({
      name: '',
      image: ''
    }) // reset form fields

    // }
       // else if (this.state.editing === true) {
       //
       //   this.props.editItem(this.state.name, this.state.image, userId, moveId, boxId, this.props.selectedItem.id)
       //
       //   this.setState({
       //     name: '',
       //     image: '',
       //     editing: false
       //   })
       // }


 }
   render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Belonging Name/Description..." name="name" id="belonging_name" type="text" value={this.state.name} autoComplete="off" required/>
          </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Image Url..." name="image" id="belonging_image" type="text" value={this.state.image} autoComplete="off" />
            <div className="submit-btn">
              <button type="submit" className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
              <i className="material-icons right">send</i>   add belonging
              </button>
              <div>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     selectedItem: state.selectedItem
//   }
// }

// const mapStateToProps = state => {
//   return {
//     selectedBelonging: state.selectedBelonging
//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    addBelonging: (name, image, userId, tripId, suitcaseId) => dispatch(addBelonging(name, image, userId, tripId, suitcaseId)),
     // editItem: (name, image, userId, moveId, itemId) => dispatch(editItem(name, image, userId, moveId, itemId))

  }
}
 export default withRouter(connect(null, mapDispatchToProps)(NewBelongingForm))

 //export default NewBelongingForm
