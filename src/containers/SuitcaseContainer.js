import React from 'react';
import SuitcaseList from '../components/SuitcaseList'
import SuitcasesSideBar from '../components/SuitcasesSideBar'
import BelongingsSideBar from '../components/BelongingsSideBar'
import SuitcasesCabeceras from '../components/SuitcasesCabeceras'


 const SuitcaseContainer = props => {

   return (
    <div className="container">
      {/*<h2 className="card-panel white black-text cont-title">My Suitcases</h2>*/}
      <div className="row">
        <SuitcaseList props={props}/>
        <BelongingsSideBar  props={props}/>
        <SuitcasesCabeceras />
      </div>

     </div>
  )
}

 export default SuitcaseContainer;
