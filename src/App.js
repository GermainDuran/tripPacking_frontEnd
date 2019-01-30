import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TripContainer from './containers/TripContainer'
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
      <div className="App">
          <TripContainer />

      </div>
    );
  }
}

export default App;
