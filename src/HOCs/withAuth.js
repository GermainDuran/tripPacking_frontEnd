import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
// import * as actions from '../actions'
import { fetchCurrentUser } from '../actions/userActions'

 const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    }

     render() {
       console.log("Venezuela",this.props);

      if (localStorage.getItem('jwt') && this.props.loggedIn) {
      
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        //we're currently fetching, show a loading spinner
        return (
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>

         )
      } else {
        //user is not AUTHORIZED to see this component
        return <Redirect to="/login" />
      }
    }
  }

   const mapStateToProps = /*FUNCTION*/ (state) => {
    return {
      loggedIn: state.user.loggedIn,
      authenticatingUser: state.user.authenticatingUser
    }
  }

   const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
    return {
      fetchCurrentUser: () => dispatch(fetchCurrentUser()) //dispatch is automagically provided by redux
    }
  }

   // const mapDispatchToProps = { fetchCurrentUser: fetchCurrentUser }

   // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
  // const connectedAuthorizedComponent = connectedToReduxHOC(AuthorizedComponent)
  // return connectedAuthorizedComponent

   return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent)
}

 export default withAuth
