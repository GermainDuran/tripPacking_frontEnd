import React from 'react';
import { connect } from 'react-redux';

 class SuitcasesCabeceras extends React.Component {

   state = {
    tripName: ''
  }


   render() {
    return (
      <div>
        <h2 className="card-panel white black-text cont-title">
          My Suitcases for
        </h2>
      </div>
    )
  }
}

 const mapStateToProps = state => {
  return {
    tripName: state.selectedTrip.name,
  }
}


 export default connect(mapStateToProps)(SuitcasesCabeceras);
