import React, { Component, PureComponent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import logo from '../../../assets/logo.svg';
import illustration from '../../../assets/images/pages/login-v2-dark.svg'
import axios from 'axios';
import { Redirect, withRouter } from 'react-router'
import classnames from 'classnames';

import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import './page-auth.css';

//const Login = (props) => {  
class Login extends PureComponent {
  constructor(props){
    super(props);
    this.state = {      
      loginStatus: '',
      email: '',
      password: '',
      loginInfo: "user_not_logged_in",      
    }
  }
  
  login = e => {
    const { history } = this.props;
    axios.post("https://shona-nag-cms.herokuapp.com/login", { withCredentials: true, email: this.state.email, password: this.state.password }, {            
    })
    //.then(response => response.json)
    .then((response) => {
      //console.log(JSON.stringify(response));
      if(response.data.success == "Successfully Logged In!"){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem("users", JSON.stringify(response.data.users));
        //console.log(localStorage.getItem('users'));
        history.push('/')                
      }else{
        this.setState({
          loginStatus: response.data.failed
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

  getUser = () => {
      const userStr = localStorage.getItem("users");
      if(userStr) return JSON.parse(userStr);
      else return null
  } 

  render(){
    const { email, password} = this.state;
    const { history } = this.props;
    const user = this.getUser();    
    if(user == "null" || user == null || user == '' || user == undefined){
      //return <Redirect from="*" to='/login'></Redirect>
      history.push('/login')
    }else{
      //return <Redirect from="*" to='/login'></Redirect>
      localStorage.removeItem("token")
      localStorage.removeItem("users")
      history.push('/')
    }
  return (        
    <></>
  )
}
}

export default withRouter(Login);
