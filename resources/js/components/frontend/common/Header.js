import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        	<Router>
	            <div>
	                <header className="header">
				    <div className="container">
				      <nav className="navbar">
				        <Link to="/" className="logo">
				          <img src="assets/frontend/images/logo.png" alt="" />
				        </Link>
				        <a href="#" id="mobile-menu-toggler">
				          <i className="ti-align-justify"></i>
				        </a>
				        <ul className="navbar-nav align-items-md-center">
				            <li><Link to="/">الرئيسية</Link></li>
				            <li><Link to="pricing">الأسعار</Link></li>
				            <li><Link to="products">المنتجات</Link></li>
				            <li><a href="#">حدد موعد</a></li>
				            <li><Link to="customers">العملاء</Link></li>
				            <li><Link to="contact">إتصل بنا</Link></li>
				            <li className="sm-hidden">&nbsp;</li>
				            <li><Link to="try-now">جرب الاّن</Link></li>
				            <li>
				                <a className="sm-hidden"><i className="icon-24pt ti-world"></i></a>
				                <a className="sd-hidden text-captial" href="#">English</a>
				            </li>
				        </ul>
				      </nav>
				    </div>
				  </header>
	            </div>
	        </Router>
        );
    }
}
