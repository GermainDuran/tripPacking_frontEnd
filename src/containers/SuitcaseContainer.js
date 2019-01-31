import React from 'react';
import SuitcaseList from '../components/SuitcaseList'

 const SuitcaseContainer = props => {

   return (
    <div className="container">
      <h2 className="card-panel white black-text cont-title">My Suitcases</h2>
      <SuitcaseList />

     </div>
  )
}

 export default SuitcaseContainer;
