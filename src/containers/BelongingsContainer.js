import React from 'react';
import {withRouter} from 'react-router-dom'
import BelongingList from '../components/BelongingList'

 const BelongingsContainer = props => {
console.log("BelongingsContainer");

   return (
    <div className="container">
    <h2 className="card-panel white black-text cont-title">Belongings in Suitcase: #[Box Num]</h2>
      <BelongingList />
    </div>
  )
}

 export default withRouter(BelongingsContainer)
