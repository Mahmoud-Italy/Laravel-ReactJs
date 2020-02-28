import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <div>

			    <section className="banner ban-home">
				    <div className="container">
				      <div className="row">
				        <div className="col-lg-5 col-md-6 col-sm-6">
				          <div className="banner-content">
				            <h1 className="text-white mb-4">
				              تقدم خطوة إلى الأمام<br/> فى إدارة شركتك واتخاذ قرارات <br/>أكثر ذكاء
				            </h1>
				            <Link to="/try-now" className="btn btn-outline-white font-size-20pt px-3 btn-rotates">جرب مجاناً</Link>
				          </div>
				        </div>
				      </div>
				    </div>
				</section>

				<div className="featureBox boxed bg-custom pb-0">
				    <div className="container">
				      <div className="row justify-content-center mb-3">
				        <div className="col-xl-5 col-lg-5 col-md-4">
				            <p className="text-white text-center font-size-24pt font-weight-normal">
				            DPMS يمكنك من إدارة أعمالك بالكامل<br/> باستخدام مجموعة متكاملة من التطبيقات الذكية
				            </p>
				        </div>
				      </div>
				    
				    	<div className="row pb-5">
				         <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
				          <Link to="/hr" className="d-block sfBox sfBox-yellow rounded text-center py-4 px-0">
				            <div className="iconBox">
				              <img src="assets/frontend/images/icons/sub_icon/1.png" alt="" className="img-icon mb-0" />
				            </div>
				            <span className="text-dark h5 mt-3 d-block mb-0">الموارد البشرية</span>
				          </Link>
				    	</div>

				        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
				          <Link to="/operations" className="d-block sfBox sfBox-blue rounded text-center py-4 px-0">
				            <div className="iconBox">
				              <img src="assets/frontend/images/icons/sub_icon/2.png" alt="" className="img-icon mb-0" />
				            </div>
				            <span className="text-dark h5 mt-3 d-block mb-0">إدارة التشغيل</span>
				          </Link>
				        </div>

				        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
				          <Link to="/machines" className="d-block sfBox sfBox-gray rounded text-center py-4 px-0">
				            <div className="iconBox">
				              <img src="assets/frontend/images/icons/sub_icon/3.png" alt="" className="img-icon mb-0" />
				            </div>
				            <span className="text-dark h5 mt-3 d-block mb-0">الماكينات والصيانة</span>
				          </Link>
				        </div>

				        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
				          <Link to="/finance.php" className="d-block sfBox sfBox-green rounded text-center py-4 px-0">
				            <div className="iconBox">
				              <img src="assets/frontend/images/icons/sub_icon/4.png" alt="" className="img-icon mb-0" />
				            </div>
				            <span className="text-dark h5 mt-3 d-block mb-0">الماليات والحسابات</span>
				          </Link>
				        </div>

				        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
				          <Link to="/marketing" className="d-block sfBox sfBox-greenlight rounded text-center py-4 px-0">
				            <div className="iconBox">
				              <img src="assets/frontend/images/icons/sub_icon/5.png" alt="" className="img-icon mb-0" />
				            </div>
				            <span className="text-dark h5 mt-3 d-block mb-0">التسويق والمبيعات</span>
				          </Link>
				        </div>

				        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
				          <Link to="/inventory" className="d-block sfBox sfBox-brown rounded text-center py-4 px-0">
				            <div className="iconBox">
				              <img src="assets/frontend/images/icons/sub_icon/6.png" alt="" className="img-icon mb-0" />
				            </div>
				            <span className="text-dark h5 mt-3 d-block mb-0">الموردون والمخازن</span>
				          </Link>
				        </div>

				      </div>
				    </div>
				  </div>

				<section className="callto-action py-3 bg-black">
				    <div className="container">
				      <div className="row">
				        <div className="col-md-8 m-auto text-center">
				          <p> مجاناً أحصل على نسختك التجريبية لمدة 30 يوم
				            <Link to="/try-now" className="btn btn-outline-aqua rounded-pill font-size-20pt px-3 ml-2 btn-try" >جـرب مجاناً</Link>
				          </p>
				        </div>
				      </div>
				    </div>
				</section>

            </div>
        );
    }
}
