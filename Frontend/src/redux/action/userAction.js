import {SIGNUP_USER,LOGIN_USER,CURRENT_USER,LOGOUT_USER} from './userType';
import setAuthentication from './setAuthentication';
import jwt from 'jsonwebtoken'
const axios = require('axios');

export const signupUser=(username,email,password,confirmPassword)=>{

    return function(dispatch){
   var OPTIONS = {
        url: "http://localhost:5000/uapi/signup",
        method: "POST",
        data:{
            username:username,
            email: email,
            password:password,
            confirmpassword:confirmPassword
            },
        headers: {
          "content-type": "application/json",
        },
      }

    axios(OPTIONS).then(res=>{
      const message=res.data.message;
      console.log(message);
      dispatch({
        type:SIGNUP_USER,
        payload:message
    })
    }
       
        )
    .catch(err=>console.log(err));
   
}
}
export const loginUser=(username,password)=>{

  return function(dispatch){
 var OPTIONS = {
      url: "http://localhost:5000/uapi/login",
      method: "POST",
      data:{
          username:username,
          password:password,
          },
      headers: {
        "content-type": "application/json",
      },
    }

  axios(OPTIONS).then(res=>{
    const message=res.data.message;
    if(message=="User Found"){
      const token=res.data.token;
      localStorage.setItem("jwtToken",token)
      // console.log(jwt.decode(token));
      setAuthentication(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    dispatch({
      type:LOGIN_USER,
      isLoggedIn:true,
      payload:message
  })

}
else{
  dispatch({
    type:LOGIN_USER,
    isLoggedIn:false,
    payload:message
})
}
  }
     
      )
  .catch(err=>console.log(err));
 
}
}
export const setCurrentUser=(user)=>{
  return{
    type:CURRENT_USER,
    payload:user
  }
}
export const logoutUser=()=>{
 return function(dispatch){
localStorage.removeItem('jwtToken');
setAuthentication(false);
dispatch(setCurrentUser({}));
dispatch({type:LOGOUT_USER})

 }
}
