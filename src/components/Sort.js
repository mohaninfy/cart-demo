import React, { Component } from 'react';
import StaticData from '../assets/mockdata/data.json';
import img from '../assets/imgs/lap.jpg';
export class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.DataForAddCart
        }
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
                <div className="col s12 m12 l12 xl12 hide-on-small-only">
                    <div className="row">
                        <div className="col s12 m9 l9 xl9 no-padding">
                            <div className="row">
                                <div className="col s3 m3 l3 xl3"></div>
                                <div className="col s9 m9 l9 xl9">
                                    <div className="row">
                                        <div className="col s2 m2 l2 xl2">
                                            <p><b>Sort By</b></p>
                                        </div>
                                        <div className="col s10 m10 l10 xl10">
                                            <ul className="tabs sortby tabs-fixed-width tab-demo">
                                                <li className="tab"><a className="active" href="#test1">Price -- High Low</a></li>
                                                <li className="tab"><a href="#test2">Price -- High Low</a></li>
                                                <li className="tab"><a href="#test3">Discount</a></li>
                                            </ul>
                                        </div>
                                        <div className="col s12 m12 l12 xl12 padding-t20">
                                            <div id="test1" className="col s12">
                                                <div className="row">
                                                    {/* <div className="col s12 offset-m1 offse-l1 offset-xl1"></div> */}
                                                    {this.state.data && this.state.data.map((list, key) =>
                                                        <div className="col s12 m3 l3 xl3">
                                                            <img className="w100 padding-t10" src={img} alt="img" />
                                                            <span>{list.item}</span><br>
                                                            </br>
                                                            <p><span className="sale pad5">{list.sale}</span><span className="actual pad5">{list.actual}</span><span className="offer pad5">{list.off}% off</span></p>
                                                            <div className="col s12 m12 l12 xl12 no-padding center-align">
                                                                <a className="waves-effect waves-light btn primary bgy rounded"><b>Add to Cart</b></a>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {/* <div className="col s12 offset-m1 offse-l1 offset-xl1"></div> */}
                                                </div>
                                            </div>
                                            <div id="test2" className="col s12">
                                                <div className="row">
                                                    {/* <div className="col s12 offset-m1 offse-l1 offset-xl1"></div> */}
                                                    {this.state.data && this.state.data.map((list, key) =>
                                                        <div className="col s12 m3 l3 xl3">
                                                            <img className="w100 padding-t10" src={img} alt="img" />
                                                            <span>{list.item}</span><br>
                                                            </br>
                                                            <p><span className="sale pad5">{list.sale}</span><span className="actual pad5">{list.actual}</span><span className="offer pad5">{list.off}% off</span></p>
                                                            <div className="col s12 m12 l12 xl12 no-padding center-align">
                                                                <a className="waves-effect waves-light btn primary bgy rounded"><b>Add to Cart</b></a>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {/* <div className="col s12 offset-m1 offse-l1 offset-xl1"></div> */}
                                                </div>
                                            </div>
                                            <div id="test3" className="col s12">
                                                <div className="row">
                                                    {/* <div className="col s12 offset-m1 offse-l1 offset-xl1"></div> */}
                                                    {this.state.data && this.state.data.map((list, key) =>
                                                        <div className="col s12 m3 l3 xl3">
                                                            <img className="w100 padding-t10" alt="img" src={img} />
                                                            <span>{list.item}</span><br>
                                                            </br>
                                                            <p><span className="sale pad5">{list.sale}</span><span className="actual pad5">{list.actual}</span><span className="offer pad5">{list.off}% off</span></p>
                                                            <div className="col s12 m12 l12 xl12 no-padding center-align">
                                                                <a className="waves-effect waves-light btn primary bgy rounded"><b>Add to Cart</b></a>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {/* <div className="col s12 offset-m1 offse-l1 offset-xl1"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="no-padding col s12 m12 l12 xl12 show-on-small hide-on-med-and-up">
                    <div className="row">
                        <div className="col s12 m12 l12 xl12 align-center">
                            <div className="row">
                                <div className="col s2 l2 xl2">
                                    <i className="fa fa-sort icon pointer"></i>
                                </div>
                                <div className="col s10 l10 xl10">
                                    <span><b>Sort</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort
