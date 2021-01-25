import React from 'react'
import {useSelector} from 'react-redux';
import Header from './Header';
import PassCatContainer from './PassCatContainer';
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function MainContainer(props) {
   const isUserLoggedin=useSelector(state=>state.user.isLoggedIn);
   
    if(isUserLoggedin===false){
      var callContainer=<><Route exact path="/"  component={LoginContainer}/><Route path="/signup" component={SignupContainer}/> </>
    }else{
        callContainer=<><Header/><PassCatContainer/></>
    }

    return (
        <>
        <Router>
        {callContainer}
        </Router>
        </>
    )
}


export default MainContainer;
