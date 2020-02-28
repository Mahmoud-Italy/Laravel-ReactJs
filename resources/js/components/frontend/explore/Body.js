import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Body extends Component {
    render() {
        return (
            <div>

				<section className="about bg-bluelight p100-0">
				    <div className="container">
				      <div className="row align-items-center">
				        <div className="col-md-5">
				          <div className="entry-content-fluid ml-auto">
				            <h2 className="pgh2">#1 DPMS البرنامج الاول<br/> لإدارة شركات الطباعة</h2>
				            <p className="pgraph">
				              صمم خصيصا لإدارة شركات الطباعة بأنواعها ويقدم الحلول الذكية لكل مشكلات عمليات التشغيل والربط بينهم بطرق
				              تمنحك الرؤية الواضحة وتساعدك على النمو
				            </p>
				            <Link to="about" className="btn btn-outline-primary rounded-pill read-mores">اعرف المزيد</Link>
				            <p><br/></p>
				          </div>
				        </div>
				        <div className="col-md-6 offset-md-1 nopadd-right">
				          <div className="video-box">
				            <img src="assets/frontend/images/video-bg.jpg" className="rounded" alt="" />
				            <a href="http://www.youtube.com/watch?v=R5WOaEzOMrk" className="video-btn">
				              <img src="assets/frontend/images/play-circle-regular.svg" alt="" />
				            </a>
				          </div>
				        </div>
				      </div>
				    </div>
				</section>

            </div>
        );
    }
}
