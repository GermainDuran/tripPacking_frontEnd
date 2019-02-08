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
import LoginForm from './components/LoginForm'

//class App extends Component {

const App = props => {

  console.log("%c APP PROPS", 'color: red', props);

    return (
    <Fragment>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginForm} />

          <Route exact path="/login" component={LoginForm} />
          <Route exact path = "/users/:userId/trips" render={() => <TripContainer />} />
          <Route exact path="/users/:userId/trips/:tripId/suitcases" render={() => <SuitcaseContainer />} />
          <Route exact path="/users/:userId/trips/:tripId/suitcases/:suitcaseId/belongings" render={() => <BelongingsContainer />} />
          <Route exact path = "/users/:userId/about" render={() => <AboutContainer />} />

        </Switch>
      </div>
    </Fragment>
  );
}

export default withRouter(App);
