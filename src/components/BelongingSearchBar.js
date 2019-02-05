import React from 'react';


 //class BelongingSearchBar extends React.Component {
const BelongingSearchBar = props => {

//render() {
    return (
    <div className="row col s7">
      <div className="input-field col s6" >
        <i className="material-icons prefix">search</i>
        <input onChange={(event) => props.handleSearch(event)} id="item_search_field" type="text" placeholder="Search for an item..." value={props.searchTerm} autoComplete="off"/>
    </div>
  </div>
    )

}


 export default BelongingSearchBar
