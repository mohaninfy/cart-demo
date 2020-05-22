import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import ShoppingList from "../components/ShoppingList";
import Nav from './Header';
import Footer from './Footer';

export class landing extends Component {
    // constructor(){
    //     super();       
    // } 
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="content">
                        <Nav />
                        <Route path="/" component={ShoppingList} />
                        {/* <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} /> */}
                        <Footer/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default landing
