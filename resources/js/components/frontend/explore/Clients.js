import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Clients extends Component {
    render() {
        return (
            <div>
            	<section className="certification">
				    <div className="container">
				      <div className="row">
				        <div className="col-lg-7 col-md-9 m-auto text-center">
				          <div className="sec-heading">
				            <h3 className="sec-title font-size-24pt">
				              موثوق به من قبل الشركات الكبيرة
				            </h3>
				          </div>
				        </div>
				      </div>
				      <div className="">
				        <div className="partners-caro owl-carousel">
				          <a className="d-block border-right" href="#">
				            <img src="assets/frontend/images/partners/1-Recovered_03.png" alt=""/>
				          </a>
				          <a className="d-block border-right" href="#">
				            <img src="assets/frontend/images/partners/1-Recovered_06.png" alt=""/>
				          </a>
				          <a className="d-block border-right" href="#">
				            <img src="assets/frontend/images/partners/1-Recovered_08.png" alt=""/>
				          </a>
				          <a className="d-block border-right" href="#">
				            <img src="assets/frontend/images/partners/1-Recovered_10.png" alt=""/>
				          </a>
				        </div>
				      </div>
				    </div>
			    </section>
            </div>
        );
    }
}
