import React, {Component} from 'react';
import './soins.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Coaching from "./coaching";
import CoeurDeSoi from "./coeurdesoi";
import Kinesiologie from "./kinesiologie";


class Soins extends Component {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/soins" component={Kinesiologie}/>
                    <Route path="/soins/kinesiologie" component={Kinesiologie}/>
                    <Route path="/soins/coeurdesoi" component={CoeurDeSoi}/>
                    <Route path="/soins/coaching" component={Coaching}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Soins;
