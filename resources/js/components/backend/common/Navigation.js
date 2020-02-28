import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Explore from '../explore/Index';
import Setting from '../settings/Index';

export default class Footer extends Component {
    render() {
        return (
        	<Router>
            <div className="">
    
			    <nav className="sidebar">
			      <div className="sidebar-header">
			        <a href="#">
			          <img src="/assets/backendimages/logo-white.png" alt="" />
			        </a>
			        <div className="sidebar-toggler not-active">
			          <span></span>
			          <span></span>
			          <span></span>
			        </div>
			      </div>

			      <div className="sidebar-body">
			        <ul className="nav">

			          <li className="nav-item nav-category f14">MAIN</li>
			          <li className="nav-item">
			            <Link to="/dashboard/explore" className="nav-link active">
			              <i className="fa fa-fort-awesome icon-fixed"></i>
			              <span className="link-title m-left15">Dashboard</span>
			            </Link>
			          </li>
			          <li className="nav-item">
			            <Link to="/dashboard/settings" className="nav-link active">
			              <i className="fa fa-fort-awesome icon-fixed"></i>
			              <span className="link-title m-left15">Settings</span>
			            </Link>
			          </li>
			        </ul>
			      </div>

			    </nav>
		        
		    </div>
		    </Router>
        );
    }
}
