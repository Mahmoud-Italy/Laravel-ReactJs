import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
				    <div className="foo-top">
				      <div className="container">
				        <div className="row fsize-9">
				          <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12">
				            <div className="widget widget-navigation ">
				              <ul className="d-flex align-items-center justify-content-between flex-wrap">
				                <li><a href="about.php">من نحن</a></li>
				                <li><a href="#">الوظائف</a></li>
				                <li><a href="#">المستثمرون</a></li>
				                <li><a href="#">الاشتراك فى رسائل البريد الإلكترونى</a></li>
				              </ul>
				            </div>
				          </div>
				          <div className="offset-xl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12">
				            <div className="d-flex align-items-center justify-content-between">
				              <span>تابعنا على </span>
				              <div className="socials">
				                <a href="#" className="twitter">
				                  <i className="ti-twitter-alt icon-24pt"></i>
				                </a>
				                <a href="#" className="linkedin">
				                  <i className="ti-linkedin icon-24pt"></i>
				                </a>
				                <a href="#" className="youtube">
				                  <i className="ti-youtube icon-24pt"></i>
				                </a>
				                <a href="#" className="facebook p-0">
				                  <i className="ti-facebook icon-24pt"></i>
				                </a>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>

				    <div className="foo-btm">
				      <div className="container">
				        <div className="row border-top pt-3 fsize-8">
				          <div className="col-xl-6 col-lg-8 col-md-6 col-sm-12">
				            <div className="widget widget-navigation">
				              <ul>
				                <li>
				                  <a href="#"><i className="icon-16pt ti-world"></i> العربية &nbsp;( المملكة العربية السعودية )</a>
				                </li>
				              </ul>
				            </div>
				          </div>
				          <div className="offset-xl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
				            <div className="d-flex justify-content-between">
				              <a href="#">بيان الخصوصية</a>
				              <a href="#">بنود الأستخدام</a>
				              <span>© DPMS 2020  </span>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </footer>
            </div>
        );
    }
}
