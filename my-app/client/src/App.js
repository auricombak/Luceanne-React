import React, {Component} from 'react';
import './App.scss';

import Quisuisje from './components/pages/quisuisje'
import Bienvenue from "./components/pages/bienvenue";

import Header from './components/header'

import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import storeRedux from './storeRedux'
import Stages from "./components/pages/stages";
import Soins from "./components/pages/soins";

class App extends Component {
    render() {
        return (
            <Provider store={storeRedux}>
                <BrowserRouter>
                    <div className="main-container">

                        <Header/>
                        <Route exact path="/" component={Bienvenue}/>
                        <Route  path="/quisuisje" component={Quisuisje}/>
                        <Route  path="/bienvenue" component={Bienvenue}/>
                        <Route  path="/stages" component={Stages}/>
                        <Route  path="/soins" component={Soins}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
