import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getSuitcases } from '../actions/suitcaseActions'

 class SuitcaseList extends React.Component {
  //
  // componentDidMount() {
  //
  // }

   render() {
    console.log("suitcaselist props", this.props);
    return (
      <div>MAPPED Suitcases SHOULD GO IN HERE AND route params</div>
    )
  }
}

 const mapStateToProps = state => {
  // debugger
  return {
    suitcases: state.suitcases,
    user: state.user
  }
}

 const mapDispatchToProps = dispatch => {
  return {
    getSuitcases: () => dispatch(getSuitcases())
  }
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuitcaseList))
