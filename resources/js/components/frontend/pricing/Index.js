import React, {Component} from 'react';
import Banner from './Banner';
import Prices from './Prices';
import Customers from './Customers';
import Today from './Today';

export default class Pricing extends Component {
    render() {
        return (
            <div>
            	<Banner/>
                <Prices/>
                <Customers/>
                <Today/>
            </div>
        );
    }
}
