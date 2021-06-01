import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>WMATA Metro</h1>
                                <h2>Here to serve you</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar  dark sticky="top" expand="md">
        <div className="container">
            <NavbarBrand className="mr-auto" href="/"><img src="/photos/MetroLogo.jpeg" height="60" width="50" alt="NuCamp Logo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            <i className="fa fa-list fa-lg" /> About Metro
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/rail">
                            <i className="fa fa-subway fa-lg" /> Rail Routes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/bus">
                            <i className="fa fa-bus fa-lg" /> Bus Routes
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
    </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;