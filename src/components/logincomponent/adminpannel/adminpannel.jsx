import React from 'react';
import {Link} from 'react-router-dom';
export default class AdminPannel extends React.Component{
  render(){
    return(
      <Link to="/createprofile" class="btn btn-primary">Primary</Link>
      <Link to="/createproduct" class="btn btn-primary">Primary</Link>
    )
  }
}