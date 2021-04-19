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
      loading: false,  
    }
  }
  
  login = e => {
    this.setState({ loading: true });
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
        history.push('/dashboard')                
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
    const { email, password, loading} = this.state;
    const { history } = this.props;
    const user = this.getUser();    
    if(user == "null" || user == null || user == '' || user == undefined){
      //return <Redirect from="*" to='/login'></Redirect>
      //history.push('/login')
    }else{
      //return <Redirect from="*" to='/login'></Redirect>
      history.push('/')
    }
  return (        
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>        
          <h2 className='brand-text text-primary ml-1'> River Route</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={illustration} alt='Login River Route' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>            
            <CardText className='mb-2'>Please sign-in to your account</CardText>
            <AvForm className='auth-login-form mt-2' onSubmit= {() => this.login()}>
            <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-primary">
              <div className={classnames({'alert-body font-small-2': this.state.loginStatus})}>
                {this.state.loginStatus}
              </div>
            </div>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <AvInput
                  required
                  autoFocus
                  type='email'
                  value={email}
                  id='login-email'
                  name='login-email'
                  placeholder='Enter email address'
                  onChange={e => this.setState({email: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='#'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>   
                <AvInput
                  required
                  tag={AvInput}
                  value={password}
                  id='login-password'
                  name='login-password'
                  type="password"
                  placeholder='Enter Password'
                  className='input-group-merge'
                  onChange={e => this.setState({password: e.target.value})}
                />             
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button color='primary' block disabled={loading} onClick={this.login}>
                {loading && (<i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/>)}
                {loading && <span>Singing In...</span>}
                {!loading && <span>Sign In</span>}
              </Button>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>New on our platform?</span>
              <Link to='/register'>
                <span style={{ color: 'white'}}>Create an account</span>
              </Link>
            </p>
            
          </Col>
        </Col>
      </Row>
    </div>
  )
}
}

export default withRouter(Login);
