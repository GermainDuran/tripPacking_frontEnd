import React from 'react';
import {withRouter} from 'react-router-dom'
import BelongingList from '../components/BelongingList'
import NewBelongingForm from '../components/NewBelongingForm'


class BelongingsContainer extends React.Component {

  //
  state = {
    suitcaseNum: ''
  }

  componentDidMount() {
    const { userId, tripId } = this.props.match.params

    fetch(`http://localhost:3000/api/v1/users/${userId}/trips/${tripId}/suitcases`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${localStorage.getItem('jwt')}`
     }
    })
      .then(r => r.json())
      .then(suitcases => {
        let suitcaseIdInt = parseInt(this.props.match.params.suitcaseId)
        let foundBox = suitcases.find((b) => b.id === suitcaseIdInt)
        let suitcaseNum = suitcases.indexOf(foundBox) + 1

        this.setState({ suitcaseNum: suitcaseNum })
    })
  }



render() {
  console.log("Venezuela", this.state)
   return (
    <div className="container">
    <h3 className="card-panel white black-text cont-title">Belongings in Suitcase: {this.state.suitcaseNum}</h3>
      <NewBelongingForm />
      <BelongingList />

    </div>
  )
}
}
 export default withRouter(BelongingsContainer)
