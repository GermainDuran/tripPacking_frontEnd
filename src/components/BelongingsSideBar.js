import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

 class BelongingsSideBar extends React.Component {

   render() {

     const tripBelongings = this.props.belongings.map((belonging) => {

      return  <li className="item-li" key={belonging.id} style={{fontFamily: 'Hammersmith One, sans-serif', fontSize: '22px', color: 'black', marginBottom: '15px'}}>
              {belonging.name}
               {/*: <span style={{fontWeight: 'light'}}> - Suitcase: {idx +1}</span>*/}</li>
    })

      return (
        <div  id="side-bar" className="col s3 z-depth-3" style={{border: 'ridge waves-light 3px', marginTop: '15px', textAlign: 'center'}}>

        <h5 className="card title">Belongings: </h5>
            <div style={{textAlign: 'left'}}>
            {tripBelongings}
            </div>
        </div>
    )
  }

 }

 const mapStateToProps = state => {

   return {
      suitcases: state.suitcases
    }
}

export default withRouter(connect(mapStateToProps)(BelongingsSideBar))
