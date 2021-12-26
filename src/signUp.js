import React, { Component } from 'react';
import Formsy from 'formsy-react';
import MyInput from './input';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
class SignUp extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  onSubmit = (values) =>{
    axios.post('https://gentle-atoll-08559.herokuapp.com/app/signup', values)
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
            <p style={{fontSize:20, fontWeight:'600',textAlign:'center'}}>Sign-up!</p>
            <div style={{display:'grid', placeItems:'center', marginBottom:30}}>
          <Formsy onValidSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <MyInput 
                name='userName'
                placeholder='user name' 
              />
              <MyInput 
                name='email'
                placeholder='email' 
              />
              <MyInput 
                name='password'
                placeholder='password' 
                type='password'
              />
          <button type="submit"  style={{width:'100%', color:'white',background:'#309975' }}>
            Submit
          </button>
      </Formsy>
      </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp);
