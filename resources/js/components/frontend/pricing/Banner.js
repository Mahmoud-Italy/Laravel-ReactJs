import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <div>
            	
            	<section className="banner ban-dept ban-02">
			        <div className="container cont2">
			          <div className="row">
			            <div className="col-lg-6 col-md-6 col-sm-12 noShit">
			              <div className="banner-content ">
			                <h2 className="font-size-64pt font-weight-normal">الأسعار</h2>
			              </div>
			            </div>
			            <div className="col-lg-6 col-md-6">
			              <div className="form trial-form ml-md-auto px-0 py-0 ebnoyPrice">
			                <h3 className="form-title pb-0 font-size-38pt font-weight-normal sm-hidden">
			                  إبدأ التحكم فى شركتك اليوم
			                </h3>
			                <div className="form-trail-content">
			                  <div className=" bg-white">
			                    <div className="first-line">
			                      <span className="text-center d-block py-3">سعر برنامج DPMS</span>
			                    </div>
			                    <div className="second-line">
			                      <span className="text-center d-block py-3">فئة واحدة</span>
			                    </div>
			                    <div className="three-line">
			                      <span className="text-center d-block py-3">30 يوم تجربة مجانية</span>
			                    </div>
			                    <div>
			                      <div className="text-center py-4 text-white bg-aqualight">
			                        <span className="d-block font-size-56pt mb-3">90,000</span>
			                        <span className="d-block font-size-32pt">جنية مصرى</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="w-100 bottom-contact">
			          <div className="container ">
			            <div className="row">
			              <div className="col-xl-5 col-lg-4 col-12 col-sm-12 py-3 mbto90">
			                <p className="font-size-24pt text-white mb-0 font-weight-normal txt-cent">
			                  100% إسترجاع استثمارك إذا لم تكن راضى
			                </p>
			              </div>
			            </div>
			          </div>
			        </div>
			    </section>
    
            </div>
        );
    }
}
