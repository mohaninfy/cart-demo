
import React, { Component } from 'react';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

import StaticData from '../assets/mockdata/data.json';
import img from '../assets/imgs/lap.jpg';
export class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isLoaded: false };
    }

    componentDidMount() {
        fetch("https://api.myjson.com/bins/qzuzi")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState(
                        {
                            data: StaticData.data
                        }
                    )         
                }
            )
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m2 l2 xl2 hide-on-small-only">
                    <Filter />
                </div>
                <div className="col s12 m10 l10 xl10 hide-on-small-only">
                    <Sort DataForAddCart={this.state.data} />
                </div>
                <div className="col s12 m2 l2 xl2 show-on-small hide-on-med-and-up">
                    <div className="row">
                        <div className="col offset-s1 offset-m1"></div>
                        <div className="col s10 m10">
                            <div className="row">
                                <div className="col s6 m6 left">
                                    <Sort />
                                </div>
                                <div className="col s6 m6 left">
                                    <Filter />
                                </div>
                            </div>
                        </div>
                        <div className="col offset-s1 offset-m1"></div>
                        <div className="col s12 m12 l12 xl12">
                            <div id="sortMobile" className="col s12">
                                <div className="row padding-t20">
                                    <div className="col s12 offset-m1 offse-l1 offset-xl1"></div>
                                    {this.state.data && this.state.data.map((list, key) =>
                                        <div className="col s12 m2 l2 xl2">
                                            <img className="w100 padding-t10" alt="img" src={img} />
                                            <span>{list.item}</span><br>
                                            </br>
                                            <p><span className="sale pad5">{list.sale}</span><span className="actual pad5">{list.actual}</span><span className="offer pad5">{list.off}% off</span></p>
                                            <div className="col s12 m12 l12 xl12 no-padding center-align">
                                                <a className="waves-effect waves-light btn primary bgy rounded"><b>Add to Cart</b></a>
                                            </div>
                                        </div>
                                    )}
                                    <div className="col s12 offset-m1 offse-l1 offset-xl1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingList

