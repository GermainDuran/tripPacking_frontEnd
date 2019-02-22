import React from 'react';
import TripList from '../components/TripList'
import NewTripForm from '../components/NewTripForm'
import { withRouter } from 'react-router-dom'
import withAuth from '../HOCs/withAuth'

const TripContainer = (props)=> {



    return (
      <div className="container">
       <h2 className="card-panel white black-text cont-title">My Trips</h2>
        <NewTripForm />
        <TripList />
      </div>
    )
}

export default withAuth(withRouter(TripContainer));
