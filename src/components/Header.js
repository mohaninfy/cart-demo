import React, { Component } from 'react';

import CartIcon from '../components/CartIcon';
import Search from '../components/Search';
export class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m12 l12 cl12 no-padding">
                    <div className="col s12 l12 m12 xl12 header h50">
                        <div className="col s3 m6 l6 xl6 valign-wrapper h100">
                            <i className="fa fa-star icon logo"></i>
                        </div>
                        <div className="col s9 m6 l6 xl6 h100">
                            <CartIcon className="right" />
                            <Search className="right" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
