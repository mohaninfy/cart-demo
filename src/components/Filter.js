import React, { Component } from 'react';
import NoUiSlider from 'nouislider-react';
import "nouislider/distribute/nouislider.css";
import M from 'materialize-css';

export class Filter extends Component {
    state = {
        startRange : 0,
        endRange: 100
    }
    componentDidMount() {
        M.AutoInit();
    }
    onSlide = (render, handle, value, un, percent) => {
        this.setState({
          textValue: value[0].toFixed(2),
          percent: percent[0].toFixed(2)
        });
      };
    render() {
        return (
            <div className="row">
                <div className="no-padding col s12 m12 l12 xl12 hide-on-small-only">
                    <p><b>Filter</b></p>
                    <div className="row">
                        <div className="col s12 m12 l12 xl12">

                            <NoUiSlider className="col s12 m12 l12 xl12 slider header" range={{ min: 0, max: 100 }} start={[0, 100]} connect href="" onSlide={this.onSlide} />
                            <br></br>
                            <p className="center-align price">
                                Price
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l12 xl12 no-padding center-align">
                            <a className="waves-effect waves-light btn primary header rounded"><b>Apply</b></a>
                        </div>
                    </div>                   
                </div>
                <div className="no-padding col s12 m12 l12 xl12 show-on-small hide-on-med-and-up">                
                    <div className="row">
                        <div className="col s12 m12 l12 xl12 align-center">
                            <div className="row">
                                <div className="col s2 l2 xl2">
                                    <i className="fa fa-filter icon pointer"></i>
                                </div>
                                <div className="col s10 l10 xl10">
                                    <span><b>Filter</b></span>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        )
    }
}

export default Filter
