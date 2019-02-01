import React from 'react';


 class Suitcase extends React.Component {


render() {
    console.log("suitcase props", this.props);
    return (
      <div className="col s12 m4">
        <div className="card small">
        <p>Suitcase Number: {this.props.suitcase.id} </p>
          <span className="card-title">
            {this.props.suitcase.name}

          </span>
        <p>Category: {this.props.suitcase.category}</p>
        </div>
      </div>
    )
  }
}

 export default Suitcase;
