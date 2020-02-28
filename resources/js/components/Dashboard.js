import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import Routes from './routes/Index';
import Header from './backend/common/Header';
import Navigation from './backend/common/Navigation';
import Footer from './backend/common/Footer';
import Explore from './backend/explore/Index';
import Setting from './backend/settings/Index';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
            <Router>

	            <div className="main-wrapper">
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
						        <li className="nav-item">
						            <Link to="/dashboard/explore" className="nav-link active">
						                <i className="fa fa-fort-awesome icon-fixed"></i>
						                <span className="link-title m-left15">الرئيسية</span>
						            </Link>
						        </li>
						        <li className="nav-item">
						            <Link to="/dashboard/settings" className="nav-link">
						                <i className="fa fa-gear icon-fixed"></i>
						                <span className="link-title m-left15">الإعدادات</span>
						            </Link>
						        </li>
					        </ul>
					    </div>

					</nav>

			        <div className="page-wrapper">
				        <Header/>
				        	<div className="page-content">
					        	<Switch>
					        		<Route exact path='/dashboard/explore' component={Explore} />
					        		<Route exact path='/dashboard/settings' component={Setting} />
					        		<Redirect to="/" />
					        	</Switch>
				        	</div>
		                <Footer/>
	                </div>

              	</div>
            </Router>
            </div>
        );
    }
}


if (document.getElementById('dash')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dash'))
}