import React from 'react';
// import { NavLink, Link } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


 class NavBar extends React.Component {
  // console.log("NAVBAR",props);
  handleClick = () => {
    // this.props.history.clear()
    this.props.history.replace('/trips')
  }

// const NavBar = () => {


render() {

    // console.log(this.props);
    return (
    <nav className="nav-wrapper white">
      <div className="container">
        <span className="brand-logo" style={{color: 'black'}}>LOGO</span>
          <ul className="left hide-on-med-and-down">
            <li>
            <button className="nav-btn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
             Log Out
            </button>
              <button onClick={this.handleClick} className="col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                Trips
              </button>
            </li>
          </ul>
      </div>
   </nav>
  )
 }
}
export default withRouter(NavBar);
 // export default NavBar
