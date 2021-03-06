import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions'

 class NavBar extends React.Component {

state = {
  aboutClicked: false
}

  handleClick = () => {
    // this.props.history.clear()
    this.props.history.push(`/users/${this.props.user.id}/trips`)
  }

  handleClick2 = () => {
    // this.props.history.clear()
  if (!this.props.loggedIn) {
    this.setState( { aboutClicked: true })
    this.props.history.push(`/about`)
  } else {
    this.props.history.push(`/about`)
  }

  }

  handleLogout = () => {
    this.setState( { aboutClicked: false })

    this.props.logoutUser()
    localStorage.clear()
    this.props.history.push("/")
  }

  handleClick3 = () => {
    // this.props.history.clear()
    this.setState( { aboutClicked: false })

    this.props.history.push(`/`)
  }

render() {

    // console.log(this.props);
      //  console.log("NAV BAR", this.props.userId);
    return (
     <div className="navbar-fixed">
    <nav className="nav-wrapper #e8f5e9 green lighten-5">
      <div className="container">
        <span className="brand-logo left" style={{color: 'black',fontFamily: 'Hammersmith One', fontSize: '40px'}}>
          <img src="../images/TripPacking3.png" alt="" width="500" heigth="500"/>

          <img alt="" width="88" heigth="100" src="https://cdn.dribbble.com/users/81653/screenshots/2013674/suitcase.gif"/>

          <img alt="" width="65" heigth="65" src="https://www.bing.com/th?id=OIP.nP54SI0xKUwgFJGF_90NTQHaHa&w=209&h=210&c=7&o=5&pid=1.7"/>
        </span>
          <ul className="left hide-on-med-and-down">
            <li>
            { !this.props.loggedIn ? null : <button onClick={this.handleLogout} className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
             Log Out
            </button>}

            {this.props.loggedIn ?  <button onClick={this.handleClick} className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                Trips
              </button>: null}


              <button onClick={this.handleClick2} className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                About
              </button>
          {this.state.aboutClicked ?   <button onClick={this.handleClick3} className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                Log in
              </button> :null}

            </li>
          </ul>
      </div>
   </nav>
   </div>
  )
 }
}

const mapStateToProps = state => {

   return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
