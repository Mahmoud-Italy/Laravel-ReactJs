import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Customers extends Component {
    render() {
        return (
            <div>
            	<section className="categories">
				    <div className="container">
				      <div className="row">
				        <div className="col-lg-5 col-md-9 m-auto text-center">
				          <div className="sec-heading">
				            <h3 className="sec-title font-size-32pt">
				              عشرات أصحاب المطابع والمديرين يعتمدون على DPMS
				            </h3>
				          </div>
				        </div>
				      </div>
				      <div className="row">

				        <div className="col-md-4 col-sm-12 mb-4">
				          <div className="image-overlay">
				            <Link to="customers">
				              <div className="content-overlay"></div>
				              <img className="content-image" src="assets/frontend/images/clients/team-member-3-370x370.jpg"/>
				              <div className="content-details fadeIn-bottom">
				                <div className="content-title d-flex align-items-baseline">
				                  <i className="icon-48pt mr-2">,</i>
				                  <div>
				                    <p className="font-size-16pt">
				                      حقا أصبحت إرادتى أسهل , كل شئ واضح ومنظم واستطيع ان أصل إلى معلومة أوتقرير فى لحطة انا فعلا سعيدة
				                    </p>
				                    <ul>
				                      <li><span>جيهان عبد الحميد</span></li>
				                      <li><span>مديرة الموارد البشرية</span></li>
				                      <li><span>مطبعة العزازى</span></li>
				                    </ul>
				                  </div>
				                </div>
				              </div>
				            </Link>
				          </div>
				        </div>

				        <div className="col-md-4 col-sm-12 mb-4">
				          <div className="image-overlay">
				            <Link to="customers">
				              <div className="content-overlay"></div>
				              <img className="content-image" src="assets/frontend/images/clients/team-member-3-370x370.jpg"/>
				              <div className="content-details fadeIn-bottom">
				                <div className="content-title d-flex align-items-baseline">
				                  <i className="icon-48pt mr-2">,</i>
				                  <div>
				                    <p className="font-size-16pt">
				                      حقا أصبحت إرادتى أسهل , كل شئ واضح ومنظم واستطيع ان أصل إلى معلومة أوتقرير فى لحطة انا فعلا سعيدة
				                    </p>
				                    <ul>
				                      <li><span>جيهان عبد الحميد</span></li>
				                      <li><span>مديرة الموارد البشرية</span></li>
				                      <li><span>مطبعة العزازى</span></li>
				                    </ul>
				                  </div>
				                </div>
				              </div>
				            </Link>
				          </div>
				        </div>

				        <div className="col-md-4 col-sm-12 mb-4">
				          <div className="image-overlay">
				            <Link to="customers">
				              <div className="content-overlay"></div>
				              <img className="content-image" src="assets/frontend/images/clients/team-member-2-370x370.jpg"/>
				              <div className="content-details fadeIn-bottom">
				                <div className="content-title d-flex align-items-baseline">
				                  <i className="icon-48pt mr-2">,</i>
				                  <div>
				                    <p className="font-size-16pt">
				                      حقا أصبحت إرادتى أسهل , كل شئ واضح ومنظم واستطيع ان أصل إلى معلومة أوتقرير فى لحطة انا فعلا سعيدة
				                    </p>
				                    <ul>
				                      <li><span>جيهان عبد الحميد</span></li>
				                      <li><span>مديرة الموارد البشرية</span></li>
				                      <li><span>مطبعة العزازى</span></li>
				                    </ul>
				                  </div>
				                </div>
				              </div>
				            </Link>
				          </div>
				        </div>
				      </div>

				      <div className="row justify-content-center mt-5">
				        <div className="col-12 text-center">
				          <Link to="customers" className="btn btn-primary btn-md br-0">
				            <span className="font-size-16pt">شاهد قصص العملاء</span>
				          </Link>
				        </div>
				      </div>
				    </div>

				</section>
            </div>
        );
    }
}
