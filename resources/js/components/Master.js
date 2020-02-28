import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import Header from './frontend/common/Header';
import Footer from './frontend/common/Footer';

import Explore from './frontend/explore/Index';
import Pricing from './frontend/pricing/Index';

export default class Master extends Component {
    render() {
        return (
            <div>
            	<Router>
	                <Header/>
	                	
	                <Footer/>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Master />, document.getElementById('app'))
}