import React, { useState } from 'react';
import "./NavBar.css";
import avatar from '../../assets/avatar.svg';
import avimg from '../../assets/images/avatar.png'
import classnames from 'classnames';
import { useParams } from 'react-router'

const NavBar = () => {
   const { code } = useParams();
   const [collapse, setCollapse] = useState(false);
   const [collapseInvoice, setCollapseInvoice] = useState(false);

   const openCollapse = (e) => {
      e.preventDefault();
      setCollapse(!collapse);
   }
   const openCollapseInvoice = (e) => {
      e.preventDefault();
      setCollapseInvoice(!collapseInvoice);
   }

   const userLink = () => {
      if(user.role == 'admin'){
         return (
            <>
            <li className="nav-item">
               <a className="d-flex align-items-center" href="/users">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="menu-item text-truncate">Users</span>
               </a>
            </li>
            <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
               </svg>
               <span className="menu-item text-truncate">Countries</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
               </svg>
               <span className="menu-item text-truncate">Centers</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                  <line x1="9" y1="20" x2="15" y2="20"></line>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
               </svg>
               <span className="menu-item text-truncate">Message to Users</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
               </svg>
               <span className="menu-item text-truncate">Welcome Message</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
               </svg>
               <span className="menu-item text-truncate">Admin Email</span>
            </a>
         </li>
         </>
         )
      }
   }

   const getUser = () => {
      const userStr = localStorage.getItem("users");
      if(userStr) return JSON.parse(userStr);
      else return null
  }   

   const user = getUser();

    return(
        <div>              
   <div className="shadow-bottom"></div>
   <div className="scrollbar-container main-menu-content ps ps--active-y">
   <ul className="navigation navigation-main">
      <li className="">
         <a className="d-flex align-items-center" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
               </svg>
               <span className="menu-title text-truncate">Dashboard</span></a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href="#">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
               </svg>
               <span className="menu-item text-truncate">Database Information</span>
            </a>
         </li>
         <li className="navigation-header">
            <span>Patient Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-more-horizontal">
               <circle cx="12" cy="12" r="1"></circle>
               <circle cx="19" cy="12" r="1"></circle>
               <circle cx="5" cy="12" r="1"></circle>
            </svg>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href={ '/demography/edit/'+code }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
               </svg>
               <span className="menu-item text-truncate">Demography</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href={ '/initial-presentation/'+code }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
               </svg>
               <span className="menu-item text-truncate">Initial Presentation</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href={ '/pathology/'+code }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
               </svg>
               <span className="menu-item text-truncate">Pathology</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href={ '/treatment/'+code }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
               </svg>
               <span className="menu-item text-truncate">Treatment</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href={ '/follow-up/'+code }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
               </svg>
               <span className="menu-item text-truncate">Follow Up</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="d-flex align-items-center" href={ '/health-economics/'+code }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
               </svg>
               <span className="menu-title text-truncate">Health Economics</span>
            </a>            
         </li>  
         <li className="nav-item">
            <a className="d-flex align-items-center" href="/logout">
               <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
               <span className="menu-item text-truncate">Logout</span>
            </a>
         </li>        
      </ul>
      <div className="ps__rail-x">
         <div className="ps__thumb-x" tabIndex="0"></div>
      </div>
      <div className="ps__rail-y">
         <div className="ps__thumb-y" tabIndex="0"></div>
      </div>
   </div>
</div>
    )
}

export default NavBar;