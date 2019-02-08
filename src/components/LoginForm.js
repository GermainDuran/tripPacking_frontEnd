import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loginUser } from '../actions/userActions'
import { Link } from 'react-router-dom'

 class LoginForm extends React.Component {


   state = {
      username: '',
      password: ''
    }

     handleChange = e => {
      e.preventDefault()
      console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

     handleLoginSubmit = e => {
       e.preventDefault()

      this.props.loginUser(this.state.username, this.state.password)
      this.setState({
        username: '',
        password: ''
      }) // reset form to initial state
    }

    handleClick2 = () => {
      // this.props.history.clear()
      this.props.history.push(`/users/1/trips`)
    }

  render() {
    return (
      <div className="arturo">
      <Fragment>
        <div style={{marginTop: '10%'}} className="container row">
          <form onSubmit={this.handleClick2} className="col s12 m4 offset-m4">
            <div className="card">
            <div className="card-action #4db6ac teal lighten-2">
                <h3>Login Form</h3>
            </div>

            <div className="card-content">
               <div className="form-field">
               <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
               </div><br />

                   <div className="form-field">
                    <input onChange={this.handleChange} type='password'  name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                  </div><br />

                   <div className="form-field">
                    <button className="btn-large waves-effect waves-dark #4db6ac teal lighten-2" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                      Login
                    </button>
                  </div>
                   </div>
                  </div>
                </form>
              </div>

              First time here? <Link to="/signup">Sign Up</Link>
    </Fragment>
    </div>
    )
  }
}


 const mapStateToProps = state => {
  return {
    authenticatingUser: state.user.authenticatingUser,
    failedLogin: state.user.failedLogin,
    error: state.user.error,
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => {

   return {
    loginUser: (username, password) => dispatch(loginUser(username, password))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))

 //export default withRouter(connect(mapStateToProps)(LoginForm))
