import React, { Component } from 'react';
import './banner.scss';
import luceanne from "../../img/luceanneWhite.png";
import logo from "../../img/logo.png";
import soins from "../../img/soinsWhite.png";


class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="left-logos">
                    <img
                        src={logo}
                        alt="logo"
                        width={70}
                        className="logo-banner"
                    />
                    <img
                        src={luceanne}
                        alt="luceanne"
                        width={500}
                        height={175}
                    />

                </div>
                <div className="right-logos">

                    <img
                        src={soins}
                        alt="soins"
                        width={350}
                        height={230}
                    />
                </div>
            </div>
        );
    }
}

export default Banner;
