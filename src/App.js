import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router'
import TripContainer from './containers/TripContainer'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
import SuitcaseContainer from './containers/SuitcaseContainer'

class App extends Component {


// state = {
//   data: []
// }
//
//
//    componentDidMount() {
//
//      fetch('http://localhost:3000/api/v1/users').then(resp => resp.json()).then(data => this.setState({
//       data: data
//      })).then(() => console.log(this.state))
//   }


  render() {
    return (
    <Fragment>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/trips" component={TripContainer} />
          <Route path="/users/:userId/trips/:tripId/suitcases" render={() => <TripContainer />} />
        </Switch>
      </div>
    </Fragment>
  );
  }
}
export default withRouter(App);
