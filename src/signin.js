import React, { Component } from 'react';
import Formsy from 'formsy-react';
import MyInput from './input';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class SignIn extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  onClick = () =>{
    this.props.history.push('/signup')
  }

  onSubmit = (values) =>{
    axios.post('https://gentle-atoll-08559.herokuapp.com/app/signin', values)
    .then(response => {
      if(response.data.errors){
        console.log(response.data.errors)
      }else{
        this.props.history.push('/home')
      }
      
    })
    // window.location()
  }

  render(){
    return(
      <div style={{height:'100vh'}}>
        <div style={{display:'grid', placeItems:'center', height:'100%'}}>
          <div style={{width:'50%', background:'#efeeb4', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',borderRadius:10, padding:60}}>
            <p style={{fontSize:20, fontWeight:'600',textAlign:'center'}}>Log in!</p>
            <div style={{display:'grid', placeItems:'center', marginBottom:30}}>
          <Formsy onValidSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <MyInput 
                name='email'
                placeholder='email' 
              />
              <MyInput 
                name='password'
                placeholder='password' 
                type='password'
              />
          <button type="log in"  style={{width:'100%', color:'white',background:'#309975' }}>
            Submit
          </button>
      </Formsy>
      
      </div>
      <div> <p onClick={this.onClick} style={{cursor: "pointer", margin:'0px 12px', fontSize:15, textAlign:'center'}}>create a new account?</p></div>
      
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn);
