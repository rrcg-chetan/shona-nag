import React, { useEffect, useState, Component } from 'react';
//import ReactDOM from 'react-dom';
//import NavBar from '../Components/navbar/NavBar';
import DashboardSideBar from '../Components/sidebar/DashboardSideBar';
import Alerts from '../Components/Alerts';
import DataQueries from '../Components/DataQueries';

import './mainstyle.css';
import './animate.css';
import './vertical-menu.css';
import './perfect-scrollbar.css';

import Documents from './Documents';
import UserData from './UserData';
import store from 'store';
import { Redirect, withRouter } from'react-router-dom'
import PatientsData from './patient/PatientsData';
  
class Dashboard extends React.Component {
  constructor(props){
    super(props);
    const { history } = this.props;
               
  }

  getUser = () => {
      const userStr = localStorage.getItem("users");
      if(userStr) return JSON.parse(userStr);
      else return null
  }  
  
  componentDidMount(){
    
  }
  render(){
    const { history } = this.props;    
    const user = this.getUser();    
    if(user == "null" || user == null || user == '' || user == undefined){
      return <Redirect from="*" to='/login'></Redirect>
      history.push('/login')
    }
  return (
    <div>
        <DashboardSideBar />
        <div className="content-wrapper animate__animated animate__fadeIn">
          <div className="app-content content overflow-hidden1 ">
            <PatientsData />
            <div className="row match-height">
              <div className="col-md-12 col-lg-6">
                <Alerts />
              </div>
              <div className="col-md-12 col-lg-6">
                <DataQueries />
              </div>
              <div className="col-md-12 col-lg-6">
                <Documents />
              </div>
              <div className="col-md-12 col-lg-6">
                <UserData />
              </div>                
          </div>
        </div>
    </div>
    </div>
  
  );   }   
}

export default withRouter(Dashboard);