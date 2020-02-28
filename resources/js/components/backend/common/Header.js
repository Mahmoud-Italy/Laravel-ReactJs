import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        	<div className="">
	         	<nav className="navbar">
	                <a href="#" className="sidebar-toggler">
	                    <i className="fa fa-ellipsis-v icon-fixed"></i>
	                </a>
	                <div className="navbar-content">
	                    <form className="search-form" method="get">
	                        <div className="input-group">
	                            <div className="input-group-prepend">
	                                <div className="input-group-text">
	                                    <i className="fa fa-search icon-fixed"></i>
	                                </div>
	                            </div>
	                            <input type="text" className="form-control" id="navbarForm" placeholder="Search..." name="search" />
	                        </div>
	                    </form>

	                    <ul className="navbar-nav">
	                        <li className="nav-item dropdown nav-profile">
	                            <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                                <img src="/assets/backend/images/avatar.png" alt="name" />
	                            </a>
	                            <div className="dropdown-menu" aria-labelledby="profileDropdown">
	                                <div className="dropdown-header d-flex flex-column align-items-center">
	                                    <div className="figure mb-3">
	                                        <img src="/assets/backend/images/avatar.png" alt="name" />
	                                    </div>
	                                    <div className="info text-center">
	                                        <p className="name font-weight-bold mb-0 fontana">NAME</p>
	                                        <p className="email text-muted mb-3 fontana">Email</p>
	                                    </div>
	                                </div>
	                                <div className="dropdown-body">
	                                    <ul className="profile-nav p-0 pt-3">
	                                        <li className="nav-item">
	                                            <a className="nav-link pointer">
	                                                <i data-feather="log-out"></i>
	                                                <i className="fa fa-power-off icon-fixed"></i>
	                                                <span className="fontana">Logout</span>
	                                            </a>
	                                        </li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </nav>
	    	</div>
        );
    }
}
