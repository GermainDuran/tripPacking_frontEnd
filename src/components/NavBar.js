import React from 'react';
// import { NavLink, Link } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

 class NavBar extends React.Component {

 // state = {
 //     userId: 13
 //   }
   //
   // componentDidMount() {
   //   this.setState({
   //     userId: this.props.userId
   //   })
   // }


  // console.log("NAVBAR",props);
  handleClick = () => {
    // this.props.history.clear()
    this.props.history.push(`/users/${this.props.userId}/trips`)
  }

  handleClick2 = () => {
    // this.props.history.clear()
    this.props.history.push(`/users/${this.props.user.id}/about`)
  }
// const NavBar = () => {


render() {

    // console.log(this.props);
      //  console.log("NAV BAR", this.props.userId);
      return (
       <div className="navbar-fixed">
      <nav className="nav-wrapper #e8f5e9 green lighten-5">
        <div className="container">

      {/*  <span className="center brand-logo" style={{marginTop: '0px'}}>
           <img id="logo" src="" alt="Packing Pal Logo"/>
          </span> */}
          <span className="brand-logo" style={{color: 'black',fontFamily: 'Hammersmith One', fontSize: '40px'}}>
            TripPacking by:Germain <img alt="" width="70" heigth="70" src="https://www.bing.com/th?id=OIP.G87VWN9dkAdYDj93eo5_5gHaGX&w=218&h=184&c=7&o=5&pid=1.7"/>
          </span>
            <ul className="left hide-on-med-and-down">
              <li>
              <button className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
               Log Out
              </button>
              {this.props.loggedIn ?   <button onClick={this.handleClick} className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                  Trips
                </button>: null}
                <button onClick={this.handleClick2} className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                  About
                </button>
              </li>
            </ul>
            <div style={{color: 'black'}}>

          </div>
        </div>
     </nav>
     </div>
    )
    }
}

const mapStateToProps = state => {

   return {
    userId: state.user.user_id
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));

//export default withRouter(NavBar);
 // export default NavBar
