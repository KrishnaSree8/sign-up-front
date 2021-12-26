import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Redirect, Switch  } from 'react-router-dom';
import SignUp from './signUp';
import Home from './home';
import SignIn from './signin'
class App extends Component{
  
  constructor(){
    super()
    this.state = {
      
    }
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/signup"><SignUp /></Route>
          <Route path="/signin"><SignIn /></Route>
          <Redirect to="/signin" />
        </Switch>
        
      </BrowserRouter>
    )
  }
}

export default App;
