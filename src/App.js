import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router'
import TripContainer from './containers/TripContainer'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
import SuitcaseContainer from './containers/SuitcaseContainer'
import BelongingsContainer from './containers/BelongingsContainer'
import AboutContainer from './containers/AboutContainer'
<<<<<<< HEAD
//import LoginForm from './components/LoginForm'
=======
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
>>>>>>> backup2

//class App extends Component {

const App = props => {

  console.log("%c APP PROPS", 'color: red', props);
  // <Route exact path="/" component={LoginForm} />
  //<Route exact path="/" render={() => <Redirect to="/users/:userId/trips" />} />

    return (
    <Fragment>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path = "/users/:userId/trips" render={() => <TripContainer />} />
          <Route exact path="/users/:userId/trips/:tripId/suitcases" render={() => <SuitcaseContainer />} />
          <Route exact path="/users/:userId/trips/:tripId/suitcases/:suitcaseId/belongings" render={() => <BelongingsContainer />} />
<<<<<<< HEAD
          <Route exact path = "/users/:userId/about" render={() => <AboutContainer />} />
=======
          <Route exact path = "/about" render={() => <AboutContainer />} />

>>>>>>> backup2
        </Switch>
      </div>
    </Fragment>
  );
}

export default withRouter(App);
