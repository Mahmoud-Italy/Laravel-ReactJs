import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="">
		        <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
					<p className="text-muted text-center text-md-left">COPYRIGHT © 2019 
					 <a href="#">EVENT MANAGER </a> ALL RIGHTS RESERVED.
					 </p>
					<p className="text-muted text-center text-md-left mb-0 d-none d-md-block">
		                DEVELOPMENT BY <a href="#" target="_blank">AGENCY</a> WITH 
		                <i className="mb-1 text-primary mr-1 icon-small"></i>
		                <i className="fa fa-heart icon-fixed"></i>
		            </p>
				</footer>
		    </div>
        );
    }
}
