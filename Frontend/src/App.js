import React from 'react';
import {Provider} from 'react-redux';

import MainContainer from './components/MainContainer';
//import PassCatContainer from './components/PassCatContainer'
//import Header from './components/Header'
import store from './redux/store';
import SetAuthentication from './redux/action/setAuthentication'
import jwt from 'jsonwebtoken'
import {setCurrentUser} from './redux'
import './App.css';

function App() {
  if(localStorage.jwtToken){
  SetAuthentication(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
  }
  return (
    <Provider store={store}>
    <div className="App">

  <MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
