import React from 'react';
import Belonging from './Belonging'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getSuitcaseBelongings} from '../actions/belongingActions'

 class BelongingList extends React.Component {

   componentDidMount() {
      const { userId, tripId, suitcaseId } = this.props.match.params
      this.props.getSuitcaseBelongings(userId, tripId, suitcaseId)
    }

   render() {
    const mappedBelongings = this.props.suitcaseBelongings.map((belonging) => {
    return <Belonging belonging={belonging} key={belonging.id} />
    })

    return (
      <div className="row">
          {mappedBelongings}
      </div>
    )
  }
}

 const mapStateToProps = state => {
   return {
     suitcaseBelongings: state.belongings
   }
}

 const mapDispatchToProps = dispatch => {
  return {  getSuitcaseBelongings: (userId, tripId, suitcaseId) => dispatch(getSuitcaseBelongings(userId, tripId, suitcaseId))
  }
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BelongingList))
