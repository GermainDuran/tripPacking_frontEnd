import React from 'react';
//import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
 class SuitcasesCabeceras extends React.Component {

   state = {
    tripName: '',
    tripDate: ''
  }

  componentDidMount() {
      const { userId } = this.props.match.params

       fetch(`http://localhost:3000/api/v1/users/${userId}/trips`)
      .then(r => r.json())
      .then(trips => {
        let tripIdInt = parseInt(this.props.match.params.tripId)
        let foundTrip = trips.find((m) => m.id === tripIdInt)
        let name = foundTrip.name
        let date = foundTrip.date
        this.setState({ tripName: name, tripDate: date}, () => console.log("updated state", this.state))
      })
    }

    reformatDate = (date) => {
     if (date) {
     let arrayOfDate = date.split("-")
     let newArrOfDate = []
      newArrOfDate.push(arrayOfDate[2])
      newArrOfDate.push(arrayOfDate[0])
      return newArrOfDate.join(',').split(',').join("-")
     } else {
      return null;
      }
    }

   render() {
    return (
      <div>
        <h4 className="card-panel white black-text cont-title">
          My Suitcases for: <span >
          {this.state.tripName} on {this.reformatDate(this.state.tripDate)}
          </span>
        </h4>
      </div>
    )
  }
}

//  const mapStateToProps = state => {
//   return {
//     tripName: state.selectedTrip.name,
//   }
// }


 export default withRouter(SuitcasesCabeceras);
 // export default connect(mapStateToProps)(SuitcasesCabeceras);
