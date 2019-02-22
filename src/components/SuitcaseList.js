import React from 'react';
import Suitcase from './Suitcase'
import { withRouter } from 'react-router-dom'


const SuitcaseList = (props) => {


     const mappedSuitcases = props.suitcases.map((suitcase) => {
      return <Suitcase suitcase={suitcase} key={suitcase.id} />
    })


    return (
      <div className="col s9">
          {mappedSuitcases}
      </div>
    )
  }

 export default withRouter(SuitcaseList)
