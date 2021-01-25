import React from 'react';
import {connect} from 'react-redux';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {logoutUser} from '../redux'
import { Link } from "react-router-dom";
function Header(props) {
    return (
        <div>
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link  to="#home" data-rb-event-key="#home" className="nav-link ">Home</Link >
      <NavDropdown title="Category" id="basic-nav-dropdown">
      <Link  to="#" className="dropdown-item" role="button">Add New Password Category</Link >
      <Link  to="#" className="dropdown-item" role="button">View All Password Category</Link >
      </NavDropdown>
      <NavDropdown title="Password" id="basic-nav-dropdown">
      <Link  to="#" className="dropdown-item" role="button">Add New Password</Link >
      <Link  to="#" className="dropdown-item" role="button">View All Password</Link >
      </NavDropdown>
      <NavDropdown title={props.userDetails.username} id="basic-nav-dropdown">
      <Link  to="#" class="dropdown-item" role="button">View Profile</Link >
      <Link  to="#" onClick={()=>props.logoutUser()} class="dropdown-item" role="button">Logout</Link >
      </NavDropdown>
    </Nav>
    
    <div>
 <p>Login as <space></space>   
   { props.userDetails.username}</p>
</div>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}
const mapStatetoProps=(state)=>{
  return{
    userDetails:state.user.userDetails
     
  }
 }
 const mapDispatchtoProps=(dispatch)=>{
  return{
     logoutUser:function(){
      dispatch(logoutUser());
     }

     
  }
 }
 export default connect(mapStatetoProps,mapDispatchtoProps)(Header);
