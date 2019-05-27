import React, { Component } from 'react';
import './header.scss';
import {Navbar, NavDropdown, Nav} from "react-bootstrap";
import luceanne from "../img/luceanneWhite.png";
import logo from "../img/logo.png";
import soins from "../img/soinComplet.png";


class Header extends Component {

    render() {
        return (
            <div className="header">
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
                            width={450}
                            height={330}
                        />
                    </div>
                </div>
            <Navbar  expand="lg">
                <Navbar.Brand href="/bienvenue">
                    <img
                        src={logo}
                        alt="login"
                        width={50}
                        height={50}
                        className="d-inline-block align-top icon-navbar"
                    />
                    <h3 className="bienvenue-label-nav">{'Bienvenue'}</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/quisuisje">Luceanne</Nav.Link>
                        <Nav.Link href="/stages">Stages</Nav.Link>
                        <NavDropdown title="Soins  et Accompagnements" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/soins/kinesiologie">Kinesiologie</NavDropdown.Item>
                            <NavDropdown.Item href="/soins/coeurdesoi">Soin au coeur de soi</NavDropdown.Item>
                            <NavDropdown.Item href="/soins/coaching">Coaching , accompagnement des femmes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/soins">Autre</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>

        );
    }
}

export default Header;
