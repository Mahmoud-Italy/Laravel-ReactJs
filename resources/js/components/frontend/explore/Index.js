import React, {Component} from 'react';
import Banner from './Banner';
import Body from './Body';
import Customers from './Customers';
import Clients from './Clients';
import Contact from './Contact';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Body/>
                <Customers/>
                <Clients/>
                <Contact/>
            </div>
        );
    }
}
