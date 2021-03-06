import React, { Component } from "react";
import "../assets/sidebar.css";
import { Link, BrowserRouter } from 'react-router-dom';


function Sidebar () {
   return (
      <BrowserRouter>
      <div className="d-flex" id="wrapper">
         <div className="bg-info border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Edulynk </div>
            <div className="list-group list-group-flush"> 
               <a
                  className="text-light list-group-item list-group-item-action bg-info"
                  onClick={()=>{window.location.href = '/';}}
               >
                  <Link to="/">Dashboard</Link>
                  
               </a>

               <a
                  className="text-light list-group-item list-group-item-action bg-info"
                  onClick={()=>{window.location.href = '/classes';}}
               >
                  <Link to="/classes">Classes</Link>   
               </a>

               <a
                  className="text-light list-group-item list-group-item-action bg-info"
               >
                  Students
               </a>
               <a
                  href="#"
                  className="text-light list-group-item list-group-item-action bg-info"
               >
                  Profile
               </a>
               <a
                  href="#"
                  className="text-light list-group-item list-group-item-action bg-info"
               >
                  Settings
               </a>
            </div>
         </div>
      </div>
      </BrowserRouter>
   );
}
export default Sidebar;
