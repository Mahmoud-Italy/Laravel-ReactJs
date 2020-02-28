import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div>
            	<section className="about pb-0 bg-light">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-lg-5 col-md-9 m-auto text-center">
				          <div className="sec-heading">
				            <h3 className="sec-title font-size-32pt">
				              جاهز للتجربة الفريدة التى ستمنحك الرؤية والتحكم اللذان تحتاجهما للنمو
				            </h3>
				          </div>
				        </div>
				      </div>
				      <div className="row align-items-center">
				        <div className="col-lg-7 col-md-9 m-auto text-center nopadd-right">
				          <img src="assets/frontend/images/1_03.png" alt=""/>
				        </div>
				      </div>
				    </div>
				</section>


				<section className=" py-5">
				    <div className="container">
				      <div className="row">
				        <div className="col-md-8 m-auto text-center">
				          <p className="mb-4 text-dark font-weight-bold font-size-20pt">
				            تواصل مع فريق المبيعات للحصول على نسختك التجريبية المجانية اليوم
				          </p>
				          <Link to="try-now" className="btn btn-primary try50">إبـدأ اليـوم</Link>
				        </div>
				      </div>
				    </div>
				</section>

            </div>
        );
    }
}
