import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from './frontend/common/Header';
import Footer from './frontend/common/Footer';

import Explore from './frontend/explore/Index';
import Pricing from './frontend/pricing/Index';

export default class RoutePath extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Explore}/>
                    <Route path='/pricing' component={Pricing}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    <RoutePath />
    , document.getElementById('app')
);