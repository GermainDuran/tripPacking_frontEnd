import React from 'react';


 class Belonging extends React.Component {


  render() {
    console.log("Venezuela Matt",this.props)
    const { name, image } = this.props.belonging
    return (

   <div className="col s12 l3">
     <div className="card small item-card z-depth-5" style={{padding: '5px'}}>
       <span className="card-title">
         {name}
       </span>
       <div className="card-image" style={{width: 'auto', textAlign: 'center', marginRight: '1%', marginTop: '10%'}}>
         <img className="item-image" src={image} alt="item-img" />
       </div>
     </div>
   </div>
 )
}
}

 export default Belonging
