import React from 'react';

class AboutContainer extends React.Component {



   render() {
    //console.log("TripsContainer props:",this.props.getTrips);
     //console.log("TripContainer props:", this.props);
    return (
      <div className="container">
       <h2 className="card-panel white black-text cont-title">About...</h2>
       <span style={{color: '#00796b',fontFamily: 'Hammersmith One', fontSize: '25px', align: 'right'}}>
       TripPacking is an application that allows users to organize and create trips with suitcases to be able
       to track all the belongings taken to a certain trip in an orderly and modern way.
            <br></br>
            <br></br>
    
       </span>
       <img alt="" width="700" heigth="700" src="../images/info.png"/>
      </div>
    )
  }
}

export default AboutContainer
