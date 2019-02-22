import React from 'react';
import { withRouter } from 'react-router-dom'
import { deleteBelonging } from '../actions/belongingActions'
import { connect } from 'react-redux';

 class Belonging extends React.Component {

   handleDelete = () => {
      const { userId, tripId, suitcaseId } = this.props.match.params
      this.props.deleteBelonging(userId, tripId, suitcaseId, this.props.belonging.id)
    }


  render() {
    //console.log("Venezuela Matt",this.props)

    const { name, image } = this.props.belonging
    return (

   <div className="col s12 l3">
     <div className="card small item-card z-depth-5" style={{padding: '5px'}}>
       <span className="card-title"  style={{marginTop: '2px'}}>
       {name}
       </span>
       <div className="card-image" style={{width: 'auto', textAlign: 'center', marginRight: '1%', marginTop: '10%'}}>
         {image ? <img src={image} className="item-image"  alt="item-img" />: null}
       </div>
       <div style={{align: 'center'}}>
      {/*  <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
          <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
        </button> */}
        <button onClick={this.handleDelete} className="delete-move-btn btn-floating btn-small waves-effect red accent-3" style={{marginTop: '10px'}}>
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
    deleteBelonging: (userId, tripId, suitcaseId, belongingId) => dispatch(deleteBelonging(userId, tripId, suitcaseId, belongingId)),

  }
}

export default withRouter(connect(null, mapDispatchToProps)(Belonging))
