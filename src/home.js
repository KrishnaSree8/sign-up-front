import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Home extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  onClick = () =>{
      console.log(11)
        this.props.history.push('/signin')
  }

  render(){
    return(
      <div>
        <p style={{fontSize:25, fontWeight:'400', textAlign:'center'}}>welcome! you have successfully signed-up. A mail is sent to your registerde email id.</p>
        <div style={{display:'grid', placeItems:'center'}}>
        <button onClick={this.onClick}>log out</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
