import React from 'react';
import SuitcaseList from '../components/SuitcaseList'
//import SuitcasesSideBar from '../components/SuitcasesSideBar'
import BelongingsSideBar from '../components/BelongingsSideBar'
import SuitcasesCabeceras from '../components/SuitcasesCabeceras'
import NewSuitcaseForm from '../components/NewSuitcaseForm'
import BelongingSearchBar from '../components/BelongingSearchBar'
import { connect } from 'react-redux';
import { getTripBelongings } from '../actions/belongingActions'
import { withRouter } from 'react-router-dom'
import { getTrips} from '../actions/tripActions'
import { getSuitcases} from '../actions/suitcaseActions'

 //const SuitcaseContainer = props => {
class SuitcaseContainer extends React.Component {

   state = {
    searchTerm: '',
    belongings: [],
     trips: []
   }

   componentDidMount() {
    // destructuring
    const { tripId, userId } = this.props.match.params
    this.props.getTripBelongings(userId, tripId)
    this.props.getSuitcases(userId, tripId)
    // this.setState({ belongings: this.props.tripItems })
  }

   handleSearch = event => {
      this.setState({ searchTerm: event.target.value }, () => {
      const filteredBelongings = this.props.tripBelongings.filter((belonging) => {
        return belonging.name.toLowerCase().includes(this.state.searchTerm)
      })
      this.setState({ belongings: filteredBelongings })
    })
   }

    filterSuitcases = () => {
      return this.props.suitcases.filter(b => b.belongings.find(i => i.name.match(new RegExp(this.state.searchTerm, 'i'))))

    }

    filterBelongings= () => {
   return this.props.tripBelongings.filter((belonging) => {
     return belonging.name.match(new RegExp(this.state.searchTerm, 'i')) // regex case insensitive /i .match/i
   })
 }

  render() {
   //  const filteredBelongings = this.props.tripBelongings.filter((belonging) => {
   //   return belonging.name.toLowerCase().includes(this.state.searchTerm)
   // })

   let suitcases = this.state.searchTerm ? this.filterSuitcases() : this.props.suitcases
   const belongings = this.state.searchTerm ? this.filterBelongings() : this.props.tripBelongings

   suitcases = suitcases.map((b) => {
      return {...b, idx: suitcases.indexOf(b)}
    })


  //  const belongingSuitcaseIds = this.state.searchTerm ? this.state.belongings.map((i) => i.suitcase_id) : this.props.tripBelongings.map((i) => i.suitcase_id)
   return (
    <div className="container" id="box-cont">
      {/*<h2 className="card-panel white black-text cont-title">My Suitcases</h2>*/}
      <div className="row">
        <SuitcasesCabeceras  trips={this.state.trips}/>
        <NewSuitcaseForm />
        <BelongingSearchBar  doubleFilter={this.doubleFilter}  handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
        <SuitcaseList  suitcases={suitcases}/>
        <BelongingsSideBar belongings={belongings} searchTerm={this.state.searchTerm}  />


      </div>

     </div>
  )
}
}

const mapStateToProps = state => {
  // console.log("STATE",state);
  //console.log(state)
  return {
    trips: state.trips,
    user: state.user,
    tripBelongings: state.belongings,
    suitcases: state.suitcases
  }
}

 const mapDispatchToProps = dispatch => {
  return {
    getTripBelongings: (userId, tripId) => dispatch(getTripBelongings(userId, tripId)),
    getTrips: () => dispatch(getTrips()),
    getSuitcases: (userId, tripId) => dispatch(getSuitcases(userId, tripId))

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuitcaseContainer));
 //export default SuitcaseContainer;
